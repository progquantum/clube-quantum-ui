import { useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock, FiLogOut } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { AuthLayout } from 'layouts/Auth';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { LegalPersonProps, SignUpFormValues } from './types';
import { schema } from './schemas';

export function LegalPerson({
  onUpdateFormStep,
  onPreviousFormStep,
}: LegalPersonProps) {
  const { signUp } = useAuthDispatch();
  const formRef = useRef<FormHandles>(null);

  const handleSignUp: SubmitHandler<SignUpFormValues> = useCallback(data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    })
      .then(() => {
        signUp(data);
        onUpdateFormStep();
      })
      .catch(noop);
  }, []);

  return (
    <AuthLayout backgroundImage="/images/signup.png" title="Insira seu CNPJ">
      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input
          type="text"
          name="company_name"
          placeholder="Razão social"
          icon={FiUser}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          icon={FiMail}
          inputMode="email"
        />

        <Input
          type="email"
          name="email_confirmation"
          placeholder="Confirmar email"
          icon={FiMail}
          onPaste={e => e.preventDefault()}
          inputMode="email"
        />

        <Input
          typePassword
          name="password"
          placeholder="Criar senha"
          icon={FiLock}
        />

        <Input
          typePassword
          name="password_confirmation"
          placeholder="Confirmar senha"
          icon={FiLock}
          onPaste={e => e.preventDefault()}
        />

        <Button type="submit">Continuar</Button>
      </Form>
      <button type="button" onClick={onPreviousFormStep}>
        <FiLogOut />
        Voltar
      </button>
    </AuthLayout>
  );
}
