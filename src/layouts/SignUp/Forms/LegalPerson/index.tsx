import { useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import { IoReturnDownBackSharp } from 'react-icons/io5';

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
      <Form ref={formRef} onSubmit={handleSignUp} className="form">
        <Input
          type="text"
          name="company_name"
          data-cy="company_name"
          placeholder="Razão social"
          icon={FiUser}
          onChange={e => {
            formRef.current.setFieldValue(
              'company_name',
              e.target.value.toUpperCase(),
            );
          }}
        />

        <Input
          type="email"
          name="email"
          data-cy="email"
          placeholder="Email"
          icon={FiMail}
          inputMode="email"
        />

        <Input
          type="email"
          name="email_confirmation"
          data-cy="email_confirmation"
          placeholder="Confirmar email"
          icon={FiMail}
          onPaste={e => e.preventDefault()}
          inputMode="email"
        />

        <Input
          typePassword
          name="password"
          data-cy="password"
          placeholder="Criar senha"
          icon={FiLock}
        />

        <Input
          typePassword
          name="password_confirmation"
          data-cy="password_confirmation"
          placeholder="Confirmar senha"
          icon={FiLock}
          onPaste={e => e.preventDefault()}
        />

        <Button type="submit" data-cy="next-step-button">
          Continuar
        </Button>
      </Form>
      <button type="button" onClick={onPreviousFormStep}>
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
