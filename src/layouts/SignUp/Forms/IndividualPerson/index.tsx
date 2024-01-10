import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import { useCallback, useRef } from 'react';
import { FiCalendar, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { AuthLayout } from 'layouts/Auth';
import { formatBirthDate } from 'utils/formatters/formatBirthDate';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { schema } from './schemas';
import { IndividualPersonProps, SignUpFormValues } from './types';

export function IndividualPerson({
  onUpdateFormStep,
  onPreviousFormStep,
}: IndividualPersonProps) {
  const { signUp } = useAuthDispatch();

  const formRef = useRef<FormHandles>(null);

  const handleFormatFormData = (data: SignUpFormValues) => {
    const { birth_date } = data;
    const formattedBirthDate = birth_date.split('/').reverse().join('-');
    const formData = {
      ...data,
      birth_date: formattedBirthDate,
    };

    return formData;
  };

  const handleSignUp: SubmitHandler<SignUpFormValues> = useCallback(data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    })
      .then(() => {
        const formData = handleFormatFormData(data);

        signUp(formData);
        onUpdateFormStep();
      })
      .catch(noop);
  }, []);

  return (
    <AuthLayout
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      title="Insira seus dados pessoais"
    >
      <Form ref={formRef} onSubmit={handleSignUp} className="form">
        <Input
          data-cy="signup_name"
          type="text"
          name="name"
          placeholder="Nome completo"
          icon={FiUser}
          onChange={e => {
            formRef.current.setFieldValue('name', e.target.value.toUpperCase());
          }}
        />

        <Input
          data-cy="signup_birthDate"
          type="text"
          inputMode="numeric"
          name="birth_date"
          placeholder="Data de nascimento"
          icon={FiCalendar}
          onChange={e => {
            formRef.current.setFieldValue(
              'birth_date',
              formatBirthDate(e.target.value),
            );
          }}
        />

        <Input
          data-cy="signup_email"
          type="email"
          name="email"
          placeholder="Preencha seu email"
          icon={FiMail}
          inputMode="email"
        />

        <Input
          data-cy="signup_confirmEmail"
          type="email"
          name="email_confirmation"
          placeholder="Confirme seu email"
          icon={FiMail}
          onPaste={e => e.preventDefault()}
          inputMode="email"
        />

        <Input
          data-cy="signup_password"
          typePassword
          name="password"
          icon={FiLock}
          placeholder="Criar senha"
        />

        <Input
          data-cy="signup_confirmPassword"
          typePassword
          name="password_confirmation"
          icon={FiLock}
          placeholder="Confirmar senha"
          onPaste={e => e.preventDefault()}
        />

        <Button type="submit" data-cy="next-step-button">
          Continuar
        </Button>
      </Form>
      <button
        style={{
          display: 'flex',
          width: '100%',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'transparent',
        }}
        type="button"
        onClick={onPreviousFormStep}
      >
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
