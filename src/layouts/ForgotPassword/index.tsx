import { useCallback, useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Link from 'next/link';
import noop from 'lodash.noop';
import Router from 'next/router';

import { Input } from 'components/Input';
import { useRecoveryPassword } from 'hooks/auth/useRecoveryPassword';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { Button } from 'components/Button';
import {
  REQUEST_PASSWORD_RESET_SUCCESS,
  SIGN_IN_PAGE,
} from 'constants/routesPath';
import { success } from 'helpers/notify/success';

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
            sendRecoveryPasswordRequest(data, {
              onSuccess: (_, variables) => {
                success(`Enviado e-mail para ${variables.email}`);

                Router.push({
                  pathname: REQUEST_PASSWORD_RESET_SUCCESS,
                  search: `?email=${data.email}`,
                });
              },
            });
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
      description="Digite seu endereço de email abaixo e nós lhe enviaremos um link de redefinição de senha."
    >
      <Form ref={formRef} onSubmit={handleRecoveryPassword} className="form">
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          inputMode="email"
        />

        <Button type="submit" disabled={isLoading} loading={isLoading}>
          Avançar
        </Button>
      </Form>

      {/* Should wrap link component with element due to this 
      issue of next/link https://github.com/vercel/next.js/issues/127 */}
      <Link href={SIGN_IN_PAGE} prefetch>
        <a className="anchor">
          <IoReturnDownBackSharp size={20} />
          Voltar para o login
        </a>
      </Link>
    </AuthLayout>
  );
}
