import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { AxiosError } from 'axios';

import { FiMail } from 'react-icons/fi';

import { Input } from 'components/Input';
import { Footer } from 'components/Footer';
import { schema } from 'schemas/recoveryPassword';
import { useRecoveryPassword } from 'hooks/auth/useRecoveryPassword';
import { SIGN_IN_PAGE } from 'constants/routesPath';
import { ErrorResponse } from 'shared/errors/apiSchema';
import { error } from 'helpers/notify/error';

import { RecoveryPasswordFormValues } from './types';

import * as S from './styles';

export function ForgotPasswordPage() {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const { mutate: sendRecoveryPasswordRequest, isLoading } =
    useRecoveryPassword();

  const { isDirty, isSubmitting } = formState;
  const isButtonDisabled = !isDirty || isSubmitting || isLoading;

  const handleRecoveryPassword: SubmitHandler<RecoveryPasswordFormValues> = ({
    email,
  }) => {
    sendRecoveryPasswordRequest(
      {
        email,
      },
      {
        onSuccess: (_, variables) => {
          toast.success(`Enviado e-mail para ${variables.email}`);

          router.push(SIGN_IN_PAGE);
        },
        onError: (err: AxiosError<ErrorResponse>) => {
          const isEmailRegistered =
            err.response?.data.statusCode === 400 &&
            err.response?.data.message === 'Email not registered';

          if (isEmailRegistered) {
            error('Email não registrado');
          }
        },
      },
    );
  };

  return (
    <>
      <title>Esqueceu sua Senha</title>

      <S.Container>
        <S.Form onSubmit={handleSubmit(handleRecoveryPassword)}>
          <h1>Esqueceu sua Senha</h1>

          <Input
            label="Email"
            name="email"
            placeholder="E-mail"
            icon={FiMail}
            control={control}
          />

          <S.FormBtn
            type="submit"
            disabled={isButtonDisabled}
            loading={isLoading}
          >
            Avançar
          </S.FormBtn>
        </S.Form>

        <Image
          width={385}
          height={382}
          src="/images/main-forgot-password.svg"
        />
      </S.Container>

      <Footer />
    </>
  );
}
