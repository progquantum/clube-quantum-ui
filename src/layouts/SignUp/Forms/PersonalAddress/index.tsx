import { useCallback, useRef, ChangeEvent } from 'react';
import { AxiosError } from 'axios';
import {
  FiHome,
  FiPackage,
  FiMapPin,
  FiGlobe,
  FiMap,
  FiLogOut,
} from 'react-icons/fi';
import { FaRegAddressCard } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatCEP } from 'utils/formatters/formatCEP';
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber';
import { useIndividualPersonSignUp } from 'hooks/auth/useIndividualPersonSignUp';
import { useAuthState } from 'contexts/auth/AuthContext';
import { error } from 'helpers/notify/error';
import { ErrorResponse } from 'shared/errors/apiSchema';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { getZipCode } from 'services/resources';
import { Checkbox } from 'components/Checkbox';
import { formatCountry } from 'utils/formatters/formatCountry';
import { formatUF } from 'utils/formatters/formatUF';

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
        const {
          street,
          number,
          neighborhood,
          complement,
          zip_code,
          city,
          state,
          country,
        } = data;
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
              street,
              number,
              neighborhood,
              complement,
              zip_code,
              city,
              state,
              country,
            },
          },
          {
            onSuccess: () => onUpdateFormStep(),
            onError: (err: AxiosError<ErrorResponse>) => {
              if (err.response.data.message === 'Email already in use') {
                error('Este email já está em uso');
              }

              if (err.response.data.message === 'CPF already in use') {
                error('Este CPF já está em uso');
              }
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
      <Form ref={formRef} onSubmit={handleAddressSubmit}>
        <Input
          type="text"
          inputMode="numeric"
          name="zip_code"
          placeholder="CEP"
          icon={FiMapPin}
          onChange={e => handleZipCode(e)}
        />
        <Input type="text" name="street" placeholder="Rua" icon={FiPackage} />
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
          icon={FaRegAddressCard}
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
          placeholder="Pais"
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
