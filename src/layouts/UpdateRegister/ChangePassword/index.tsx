import { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import { CgPassword } from 'react-icons/cg';

import noop from 'lodash.noop';

import { Input } from 'components/Input';
import { User } from 'components/Illustrations/User';
import { FORGOT_PASSWORD_PAGE } from 'constants/routesPath';

import { useChangePassword } from 'hooks/auth/useChangePassword';

import { ShowPasswordInput } from 'components/Input/ShowPassword';

import { performSchemaValidation } from 'utils/performSchemaValidation';

import { Button } from 'components/Button';

import { schema } from './schemas';

import { ChangePasswordFormValues } from './types';

import * as S from './styles';

export function ChangePassword() {
  const { mutate: changePassword, isLoading } = useChangePassword();
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
            changePassword({
              ...data,
            });
          })
          .catch(noop);
      },
      [changePassword],
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

          <ShowPasswordInput
            type="password"
            placeholder="Nova senha"
            name="new_password"
            icon={FiLock}
          />

          <ShowPasswordInput
            type="password"
            placeholder="Confirma nova senha"
            name="confirm_new_password"
            icon={FiLock}
          />

          <Button type="submit" loading={isLoading}>
            Solicitar alteração de senha
          </Button>
        </Form>
      </S.Container>
    </>
  );
}
