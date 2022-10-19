import { ChangeEvent, useCallback, useRef } from 'react';
import {
  FiMapPin,
  FiPackage,
  FiHome,
  FiMap,
  FiGlobe,
  FiInfo,
  FiLogOut,
} from 'react-icons/fi';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatCEP } from 'utils/formatters/formatCEP';
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { useLegalPersonSingUp } from 'hooks/auth/useLegalPersonSingUp';
import { useAuthState } from 'contexts/auth/AuthContext';
import { AuthLayout } from 'layouts/Auth';
import { formatCountry } from 'utils/formatters/formatCountry';
import { Checkbox } from 'components/Checkbox';
import { formatUF } from 'utils/formatters/formatUF';
import { getZipCode } from 'services/resources';

import { BusinessAddressProps, AddressFormValues } from './types';
import { schema } from './schemas';

export function BusinessAddress({
  onUpdateFormStep,
  onPreviousFormStep,
}: BusinessAddressProps) {
  const { mutate: signUp, isLoading: isSignuping } = useLegalPersonSingUp();
  const { registerUser } = useAuthState();

  const formRef = useRef<FormHandles>(null);

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
        const { company_name, phone, cnpj, email, password, invited_by } =
          registerUser;

        signUp(
          {
            company_name,
            phone,
            cnpj,
            email,
            password,
            invited_by,
            address: {
              ...data,
            },
          },
          {
            onSuccess: () => onUpdateFormStep(),
          },
        );
      });
    },
    [signUp, registerUser],
  );

  return (
    <AuthLayout
      backgroundImage="/images/signup.png"
      title="Insira seu endereço"
    >
      <Form ref={formRef} onSubmit={handleSubmitAddress} className="form">
        <Input
          type="text"
          inputMode="numeric"
          name="zip_code"
          placeholder="CEP"
          icon={FiMapPin}
          onChange={e => handleZipCode(e)}
        />

        <Input
          type="text"
          name="street"
          placeholder="Logradouro"
          icon={FiPackage}
        />

        <Input
          type="text"
          name="neighborhood"
          placeholder="Bairro"
          icon={BiBuildingHouse}
        />

        <Input
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
          type="text"
          name="complement"
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

        <Checkbox type="checkbox" name="terms" />

        <Button type="submit" loading={isSignuping} disabled={isSignuping}>
          Continuar
        </Button>
      </Form>
      <button type="button" onClick={onPreviousFormStep}>
        <FiLogOut />
        Voltar
      </button>
    </AuthLayout>
  );
}
