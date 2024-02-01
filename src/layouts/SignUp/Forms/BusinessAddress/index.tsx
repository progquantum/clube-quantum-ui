import { ChangeEvent, useCallback, useEffect, useRef } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';
import {
  FiGlobe,
  FiHome,
  FiInfo,
  FiMap,
  FiMapPin,
  FiPackage,
} from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';

import { AuthLayout } from 'layouts/Auth';
import { getZipCode } from 'services/resources';
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber';
import { formatCEP } from 'utils/formatters/formatCEP';
import { formatCountry } from 'utils/formatters/formatCountry';
import { formatUF } from 'utils/formatters/formatUF';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { schema } from './schemas';
import { AddressFormValues, BusinessAddressProps } from './types';

export function BusinessAddress({
  onUpdateFormStep,
  onPreviousFormStep,
}: BusinessAddressProps) {
  const { signUp } = useAuthDispatch();
  const { registerUser } = useAuthState();

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (registerUser) {
      const fields = [
        'zip_code',
        'street',
        'neighborhood',
        'city',
        'state',
        'country',
        'number',
        'complement',
      ];

      fields.forEach((field: string) => {
        const fieldValue = registerUser[field];

        if (fieldValue) {
          formRef.current.setFieldValue(field, fieldValue);
        }
      });
    }
  }, []);

  const handleZipCode = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      formRef.current.setFieldValue('zip_code', formatCEP(e.target.value));

      if (e.target.value.length === 10) {
        const formattedCep = e.target.value.replace('.', '').replace('-', '');

        await getZipCode(formattedCep).then(data => {
          formRef.current.setFieldValue('street', data?.street);
          formRef.current.setFieldValue('neighborhood', data?.neighborhood);
          formRef.current.setFieldValue('city', data?.city);
          formRef.current.setFieldValue('state', data?.state);
          formRef.current.setFieldValue('country', data?.country);
        });
      }
    },
    [formRef],
  );

  const handleSubmitAddress: SubmitHandler<AddressFormValues> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      }).then(() => {
        signUp(data);
        onUpdateFormStep();
      });
    },
    [signUp, registerUser],
  );

  return (
    <AuthLayout
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      title="Insira seu endereço"
    >
      <Form ref={formRef} onSubmit={handleSubmitAddress} className="form">
        <Input
          type="text"
          inputMode="numeric"
          name="zip_code"
          data-cy="zip_code"
          placeholder="CEP"
          icon={FiMapPin}
          onChange={e => handleZipCode(e)}
        />

        <Input
          type="text"
          name="street"
          data-cy="business_street"
          placeholder="Logradouro"
          icon={FiPackage}
        />

        <Input
          type="text"
          name="neighborhood"
          data-cy="neighborhood"
          placeholder="Bairro"
          icon={BiBuildingHouse}
        />

        <Input
          type="text"
          inputMode="numeric"
          name="number"
          data-cy="number"
          placeholder="Número"
          icon={FiHome}
          onChange={e =>
            formRef.current.setFieldValue(
              'number',
              formatAddressNumber(e.target.value),
            )
          }
        />
        <Input
          type="text"
          name="complement"
          data-cy="complement"
          placeholder="Complemento"
          icon={FiInfo}
        />
        <Input type="text" name="city" placeholder="Cidade" icon={BsPinMap} />
        <Input
          type="text"
          name="state"
          placeholder="Estado"
          icon={FiMap}
          onChange={e =>
            formRef.current.setFieldValue('state', formatUF(e.target.value))
          }
        />

        <Input
          type="text"
          name="country"
          placeholder="País"
          icon={FiGlobe}
          onChange={e =>
            formRef.current.setFieldValue(
              'country',
              formatCountry(e.target.value),
            )
          }
        />
        <Button data-cy="next-step-button" type="submit">
          Continuar
        </Button>
      </Form>
      <button
        style={{
          display: 'flex',
          width: '100%',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'transparent',
        }}
        type="button"
        onClick={onPreviousFormStep}
      >
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
