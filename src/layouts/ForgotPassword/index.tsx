import { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Link from 'next/link';
import noop from 'lodash.noop';

import { Input } from 'components/Input';
import { useRecoveryPassword } from 'hooks/auth/useRecoveryPassword';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { Button } from 'components/Button';
import { SIGN_IN_PAGE } from 'constants/routesPath';

import { RecoveryPasswordFormValues } from './types';
import { schema } from './schemas';

export function ForgotPasswordPage() {
  const formRef = useRef<FormHandles>(null);

  const { mutate: sendRecoveryPasswordRequest, isLoading } =
    useRecoveryPassword();

  const handleRecoveryPassword: SubmitHandler<RecoveryPasswordFormValues> =
    useCallback(
      data => {
        performSchemaValidation({
          data,
          formRef,
          schema,
        })
          .then(() => {
            const { email } = data;

            sendRecoveryPasswordRequest({ email });
          })
          .catch(noop);
      },
      [sendRecoveryPasswordRequest],
    );

  return (
    <AuthLayout
      backgroundImage="/images/forgot-password.png"
      backgroundPosition="right"
      title="Esqueci minha senha"
    >
      <Form ref={formRef} onSubmit={handleRecoveryPassword}>
        <Input name="email" placeholder="E-mail" icon={FiMail} />

        <Button type="submit" disabled={isLoading} loading={isLoading}>
          Avançar
        </Button>
      </Form>

      <Link href={SIGN_IN_PAGE} prefetch>
        <a>
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Link>
    </AuthLayout>
  );
}
