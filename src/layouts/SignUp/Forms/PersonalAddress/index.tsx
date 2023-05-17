import { useCallback, useRef, ChangeEvent } from 'react';

import { FiHome, FiPackage, FiMapPin, FiGlobe, FiMap } from 'react-icons/fi';

import { FaRegAddressCard } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { setCookie } from 'nookies';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatCEP } from 'utils/formatters/formatCEP';
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber';
import { useIndividualPersonSignUp } from 'hooks/auth/useIndividualPersonSignUp';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { getZipCode } from 'services/resources';
import { Checkbox } from 'components/Checkbox';
import { formatCountry } from 'utils/formatters/formatCountry';
import { formatUF } from 'utils/formatters/formatUF';

import { quantumClientQueue } from 'config/client';

import {
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from 'constants/storage';

import { PersonalAddressProps, AddressFormValues } from './types';
import { schema } from './schemas';

export function PersonalAddress({
  onUpdateFormStep,
  onPreviousFormStep,
}: PersonalAddressProps) {
  const { registerUser } = useAuthState();
  const { mutate: signUp, isLoading: isSignuping } =
    useIndividualPersonSignUp();

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

  const handleAddressSubmit: SubmitHandler<AddressFormValues> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      }).then(() => {
        const { name, phone, cpf, email, password, invited_by, birth_date } =
          registerUser;

        const formatedNeighborhood = data.neighborhood.replace('-', '');

        signUp(
          {
            name,
            phone,
            cpf,
            email,
            password,
            invited_by,
            birth_date,
            address: {
              ...data,
              neighborhood: formatedNeighborhood,
            },
          },
          {
            onSuccess: ({ token, refresh_token }) => {
              setCookie(undefined, TOKEN_STORAGE_KEY, token, {
                maxAge: 60 * 60 * 24 * 30,
                path: `/`,
              });

              setCookie(undefined, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
                maxAge: 60 * 60 * 24 * 30,
                path: `/`,
              });

              onUpdateFormStep();
            },
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
      <Form ref={formRef} onSubmit={handleAddressSubmit} className="form">
        <Input
          data-cy="signup_zipCode"
          type="text"
          inputMode="numeric"
          name="zip_code"
          placeholder="CEP"
          icon={FiMapPin}
          onChange={e => handleZipCode(e)}
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

        <Checkbox
          data-cy="signup_terms"
          type="checkbox"
          name="terms"
          style={{ margin: '24px 0' }}
        />

        <Button
          data-cy="next-step-button"
          type="submit"
          loading={isSignuping}
          disabled={isSignuping}
        >
          Continuar
        </Button>
      </Form>
      <button type="button" onClick={onPreviousFormStep}>
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
