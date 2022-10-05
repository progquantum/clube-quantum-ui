import { useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock, FiCalendar, FiLogOut } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatBirthDate } from 'utils/formatters/formatBirthDate';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { ShowPasswordInput } from 'components/Input/ShowPassword';

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
      backgroundImage="/images/signup.png"
      title="Insira seus dados pessoais"
    >
      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input
          type="text"
          name="name"
          placeholder="Nome completo"
          icon={FiUser}
        />

        <Input
          type="text"
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
          type="email"
          name="email"
          placeholder="Preencha seu email"
          icon={FiMail}
        />

        <Input
          type="email"
          name="email_confirmation"
          placeholder="Confirme seu email"
          icon={FiMail}
        />

        <ShowPasswordInput
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Criar senha"
        />

        <ShowPasswordInput
          type="password"
          name="password_confirmation"
          icon={FiLock}
          placeholder="Confirmar senha"
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
