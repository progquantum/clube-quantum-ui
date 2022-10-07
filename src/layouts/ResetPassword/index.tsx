import { useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { useResetPassword } from 'hooks/auth/useResetPassword';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { Button } from 'components/Button';
import { ShowPasswordInput } from 'components/Input/ShowPassword';

import { ResetPasswordFormValues } from './types';
import { schema } from './schemas';

export function ResetPasswordPage() {
  const { mutate: resetPassword, isLoading } = useResetPassword();

  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const inviteCode = router.query.code;

  const handleResetPassword: SubmitHandler<ResetPasswordFormValues> =
    useCallback(
      data => {
        performSchemaValidation({
          formRef,
          data,
          schema,
        })
          .then(() => {
            const { password } = data;

            resetPassword({
              code: inviteCode,
              password,
            });
          })
          .catch(noop);
      },
      [resetPassword],
    );

  return (
    <AuthLayout
      backgroundImage="/images/reset-password.png"
      backgroundPosition="right"
      title="Redefinir senha"
      description="Por favor, digite sua nova senha abaixo."
    >
      <Form ref={formRef} onSubmit={handleResetPassword}>
        <ShowPasswordInput
          type="password"
          name="password"
          placeholder="Nova senha"
          icon={FiLock}
        />

        <ShowPasswordInput
          type="password"
          name="confirm_password"
          placeholder="Confirma senha"
          icon={FiLock}
          onPaste={e => e.preventDefault()}
        />

        <Button type="submit" disabled={isLoading} loading={isLoading}>
          Avançar
        </Button>
      </Form>
    </AuthLayout>
  );
}
