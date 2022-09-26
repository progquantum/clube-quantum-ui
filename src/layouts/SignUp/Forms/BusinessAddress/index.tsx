import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import {
  FiMapPin,
  FiPackage,
  FiHome,
  FiMap,
  FiGlobe,
  FiInfo,
} from 'react-icons/fi';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';

import { addressDataSchema } from 'schemas/signUp';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatCEP } from 'utils/formatters/formatCEP';
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber';
import { useLegalPersonSingUp } from 'hooks/auth/useLegalPersonSingUp';
import { useAuthState } from 'contexts/auth/AuthContext';
import { formatValueToUppercase } from 'utils/formatters/formatValueToUppercase';
import { error } from 'helpers/notify/error';

import { ErrorResponse } from 'shared/errors/apiSchema';

import { BusinessAddressProps, AddressFormValues } from './types';
import * as S from './styles';

export function BusinessAddress({
  onUpdateFormStep,
  onPreviousFormStep,
}: BusinessAddressProps) {
  const { control, handleSubmit, register, setValue, formState } = useForm({
    resolver: yupResolver(addressDataSchema),
  });

  const { registerUser } = useAuthState();

  const { mutate: signUp, isLoading: isSignuping } = useLegalPersonSingUp();

  const [isChecked, setIsChecked] = useState(false);

  const { isDirty, isSubmitting } = formState;
  const isButtonDisabled =
    !isDirty || isSubmitting || isSignuping || !isChecked;

  const handleSubmitAddress: SubmitHandler<AddressFormValues> = data => {
    const { company_name, phone, cnpj, email, password, invited_by } =
      registerUser;
    const {
      street,
      number,
      complement,
      neighborhood,
      zip_code,
      city,
      state,
      country,
    } = data;

    signUp(
      {
        company_name,
        phone,
        cnpj,
        email,
        password,
        invited_by,
        address: {
          street,
          number,
          complement,
          neighborhood,
          zip_code,
          city,
          state,
          country,
        },
      },
      {
        onSuccess: () => onUpdateFormStep(),
        onError: (err: AxiosError<ErrorResponse>) => {
          const isEmailInvalid =
            err.response.status === 400 &&
            err.response?.data.message[0] === 'email must be an email';

          const isEmailInUse =
            err.response.status === 409 &&
            err.response.data.message === 'Email already in use';

          const isCNPJInUse =
            err.response.status === 409 &&
            err.response.data.message === 'CNPJ already in use';

          const isContryDoesntContaintOnlyLetters =
            err.response.status === 400 &&
            err.response.data.message[0] ===
              'address.country can only contain letters';

          if (isEmailInvalid) {
            error('Insira um email válido');
          }

          if (isEmailInUse) {
            error('Este email já está em uso, insira um outro email');
          }

          if (isCNPJInUse) {
            error('Este CNPJ já está em uso');
          }

          if (isContryDoesntContaintOnlyLetters) {
            error('O país deve conter somente letras');
          }
        },
      },
    );
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(handleSubmitAddress)}>
        <Input
          type="text"
          label="CEP"
          name="zip_code"
          control={control}
          placeholder="CEP"
          icon={FiMapPin}
          {...register('zip_code', {
            onChange: e => {
              setValue('zip_code', formatCEP(e.target.value));
            },
          })}
        />

        <Input
          type="text"
          label="Logradouro"
          name="street"
          control={control}
          placeholder="Logradouro"
          icon={FiPackage}
        />

        <Input
          type="text"
          label="Bairro"
          name="neighborhood"
          control={control}
          placeholder="Bairro"
          icon={BiBuildingHouse}
        />

        <Input
          type="text"
          label="Número"
          name="number"
          control={control}
          placeholder="Número"
          icon={FiHome}
          {...register('number', {
            onChange: e => {
              setValue('number', formatAddressNumber(e.target.value));
            },
          })}
        />

        <Input
          type="text"
          label="Complemento"
          name="complement"
          control={control}
          placeholder="Complemento"
          icon={FiInfo}
        />

        <Input
          type="text"
          label="Cidade"
          name="city"
          control={control}
          placeholder="Cidade"
          icon={BsPinMap}
        />

        <Input
          type="text"
          label="Estado"
          name="state"
          control={control}
          maxLength={2}
          placeholder="Estado"
          icon={FiMap}
          {...register('state', {
            onChange: e => {
              setValue('state', formatValueToUppercase(e.target.value));
            },
          })}
        />

        <Input
          type="text"
          label="País"
          name="country"
          control={control}
          placeholder="País"
          icon={FiGlobe}
        />
        <S.Terms>
          <S.CheckBox
            type="checkbox"
            name="terms"
            checked={isChecked}
            onChange={() => setIsChecked(current => !current)}
          />
          <S.TextTerm>
            Para continuar você precisa ler e concordar com nossos{' '}
            <span>termos e condições</span> e
            <span> política de privacidade.</span>
            (obrigatório)
          </S.TextTerm>
        </S.Terms>
        <S.ButtonGroup>
          <Button
            type="submit"
            loading={isSignuping}
            disabled={isButtonDisabled}
          >
            Continuar
          </Button>
          <Button variant="secondary" onClick={onPreviousFormStep}>
            Voltar
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  );
}
