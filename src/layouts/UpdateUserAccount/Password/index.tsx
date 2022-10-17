import { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { CgPassword } from 'react-icons/cg';
import noop from 'lodash.noop';

import { useUpdateUserPassword } from 'hooks/user/useUpdateUserPassword';
import { User } from 'components/Illustrations/User';
import { FORGOT_PASSWORD_PAGE } from 'constants/routesPath';
import { Input } from 'components/Input';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Button } from 'components/Button';
import { success } from 'helpers/notify/success';

import { ChangePasswordFormValues } from './types';
import { schema } from './schemas';
import * as S from './styles';

export function Password() {
  const { mutate: updateUserPassword, isLoading } = useUpdateUserPassword();
  const formRef = useRef<FormHandles>(null);

  const hanleChangePassword: SubmitHandler<ChangePasswordFormValues> =
    useCallback(
      data => {
        performSchemaValidation({
          formRef,
          data,
          schema,
        })
          .then(() => {
            const { actual_password, new_password } = data;

            updateUserPassword(
              {
                actual_password,
                new_password,
              },
              {
                onSuccess: () => {
                  success('Senha alterada com sucesso');
                },
              },
            );
          })
          .catch(noop);
      },
      [useUpdateUserPassword],
    );

  return (
    <>
      <title>Atualização de cadastro</title>
      <S.Container>
        <S.ResetPassword>
          <User width="18" height="20" color="#BBBBBB" />
          <p>Alterar senha</p>
        </S.ResetPassword>

        <Form ref={formRef} onSubmit={hanleChangePassword}>
          <Input
            type="password"
            placeholder="Sua senha atual"
            name="actual_password"
            icon={CgPassword}
          />

          <S.ForgotPassword href={FORGOT_PASSWORD_PAGE}>
            Esqueceu sua senha?
          </S.ForgotPassword>

          <Input
            type="password"
            placeholder="Nova senha"
            name="new_password"
            icon={FiLock}
            onPaste={e => e.preventDefault()}
          />

          <Input
            type="password"
            placeholder="Confirma nova senha"
            name="confirm_new_password"
            icon={FiLock}
            onPaste={e => e.preventDefault()}
          />

          <Button type="submit" loading={isLoading}>
            Solicitar alteração de senha
          </Button>
        </Form>
      </S.Container>
    </>
  );
}
