import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { FiHome, FiPackage, FiMapPin, FiGlobe, FiMap } from 'react-icons/fi';
import { AiFillIdcard } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';

import { addressDataSchema } from 'schemas/signUp';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatCEP } from 'utils/formatters/formatCEP';
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber';
import { formatValueToUppercase } from 'utils/formatters/formatValueToUppercase';
import { useIndividualPersonSignUp } from 'hooks/auth/useIndividualPersonSignUp';
import { useAuthState } from 'contexts/auth/AuthContext';
import { error } from 'helpers/notify/error';

import { ErrorResponse } from 'shared/errors/apiSchema';

import { PersonalAddressProps, AddressFormValues } from './types';
import * as S from './styles';

export function PersonalAddress({
  onUpdateFormStep,
  onPreviousFormStep,
}: PersonalAddressProps) {
  const { handleSubmit, control, register, setValue, formState } = useForm({
    resolver: yupResolver(addressDataSchema),
  });

  const { registerUser } = useAuthState();

  const { mutate: signUp, isLoading: isSinguping } =
    useIndividualPersonSignUp();

  const onSubmit: SubmitHandler<AddressFormValues> = data => {
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
          const isEmailInvalid =
            err.response.status === 400 &&
            err.response?.data.message[0] === 'email must be an email';

          const isEmailInUse =
            err.response.status === 409 &&
            err.response.data.message === 'Email already in use';

          const isCPFInUse =
            err.response.status === 409 &&
            err.response.data.message === 'CPF already in use';

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

          if (isCPFInUse) {
            error('Este CPF já está em uso');
          }

          if (isContryDoesntContaintOnlyLetters) {
            error('O país deve conter somente letras');
          }
        },
      },
    );
  };
  const [isChecked, setIsChecked] = useState(false);

  const { isDirty, isSubmitting } = formState;
  const isButtonDisabled =
    isSinguping || !isDirty || isSubmitting || !isChecked;

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="Rua"
          icon={FiPackage}
          control={control}
        />

        <Input
          type="text"
          label="Bairro"
          name="neighborhood"
          placeholder="Bairro"
          control={control}
          icon={BiBuildingHouse}
        />

        <Input
          type="text"
          label="Número"
          name="number"
          placeholder="Número"
          icon={FiHome}
          control={control}
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
          icon={AiFillIdcard}
        />

        <Input
          type="text"
          label="Cidade"
          name="city"
          placeholder="Cidade"
          control={control}
          icon={BsPinMap}
        />

        <Input
          type="text"
          label="Estado"
          name="state"
          placeholder="Estado"
          control={control}
          maxLength={2}
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
          placeholder="Pais"
          icon={FiGlobe}
          control={control}
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
            loading={isSinguping}
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
