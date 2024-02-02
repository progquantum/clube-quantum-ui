import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useEffect, useRef } from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa';
import { FiGlobe, FiHome, FiMap, FiMapPin, FiPackage } from 'react-icons/fi';
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
import { AddressFormValues, PersonalAddressProps } from './types';

export function PersonalAddress({
  onUpdateFormStep,
  onPreviousFormStep,
}: PersonalAddressProps) {
  const formRef = useRef<FormHandles>(null);
  const { signUp } = useAuthDispatch();
  const { registerUser } = useAuthState();

  const handleZipCode = useCallback(
    async (zip_code: string) => {
      formRef.current.setFieldValue('zip_code', formatCEP(zip_code));

      if (zip_code.length === 10) {
        const formattedCep = zip_code.replace('.', '').replace('-', '');

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

  useEffect(() => {
    if (registerUser) {
      const fields = [
        'street',
        'neighborhood',
        'city',
        'state',
        'country',
        'zip_code',
        'complement',
        'number',
      ];

      fields.forEach((field: string) => {
        const fieldValue = registerUser[field];
        if (fieldValue) {
          if (field === 'zip_code') {
            formRef.current.setFieldValue(field, formatCEP(fieldValue));
          } else {
            formRef.current.setFieldValue(field, fieldValue);
          }
        }
      });
    }
  }, []);

  const handleAddressSubmit: SubmitHandler<AddressFormValues> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      }).then(() => {
        const formattedNeighborhood = data.neighborhood.replace('-', '');

        signUp({ ...data, neighborhood: formattedNeighborhood });
        onUpdateFormStep();
      });
    },
    [signUp],
  );

  return (
    <AuthLayout
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      title="Insira seu endereço"
    >
      <Form ref={formRef} onSubmit={handleAddressSubmit} className="form">
        <Input
          data-cy="signup_zipCode"
          type="text"
          inputMode="numeric"
          name="zip_code"
          placeholder="CEP"
          icon={FiMapPin}
          onChange={e => handleZipCode(e.target.value)}
        />
        <Input
          data-cy="signup_street"
          type="text"
          name="street"
          placeholder="Rua"
          icon={FiPackage}
        />
        <Input
          data-cy="signup_neighborhood"
          type="text"
          name="neighborhood"
          placeholder="Bairro"
          icon={BiBuildingHouse}
        />
        <Input
          data-cy="signup_number"
          type="text"
          inputMode="numeric"
          name="number"
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
          data-cy="signup_complement"
          type="text"
          name="complement"
          placeholder="Complemento"
          icon={FaRegAddressCard}
        />
        <Input
          data-cy="signup_city"
          type="text"
          name="city"
          placeholder="Cidade"
          icon={BsPinMap}
        />
        <Input
          data-cy="signup_state"
          type="text"
          name="state"
          placeholder="Estado"
          icon={FiMap}
          onChange={e =>
            formRef.current.setFieldValue('state', formatUF(e.target.value))
          }
        />
        <Input
          data-cy="signup_country"
          type="text"
          name="country"
          placeholder="Pais"
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
