import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import { useCallback, useEffect, useRef } from 'react';
import { FiCalendar, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { setCookie } from 'nookies';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { AuthLayout } from 'layouts/Auth';
import { formatBirthDate } from 'utils/formatters/formatBirthDate';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { useIndividualPersonSignUp } from 'hooks/auth/useIndividualPersonSignUp';
import {
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from 'constants/storage';
import { Checkbox } from 'components/Checkbox';

import { schema } from './schemas';
import { IndividualPersonProps, SignUpFormValues } from './types';

export function IndividualPerson({
  onUpdateFormStep,
  onPreviousFormStep,
}: IndividualPersonProps) {
  const { registerUser } = useAuthState();
  const { signUp: signUpState } = useAuthDispatch();

  const { mutate: signUp, isLoading: isSignuping } =
    useIndividualPersonSignUp();

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (registerUser) {
      const fields = ['name', 'birth_date', 'email', 'password', 'terms'];

      fields.forEach((field: string) => {
        const fieldValue = registerUser[field];

        if (fieldValue) {
          if (field === 'password' || field === 'email') {
            formRef.current.setFieldValue(field, fieldValue);
            formRef.current.setFieldValue(`${field}_confirmation`, fieldValue);
          } else {
            formRef.current.setFieldValue(field, fieldValue);
          }
        }
      });
    }
  }, []);

  const handlePreviousStep = () => {
    const formData = formRef.current.getData();
    let dataToSaveOnState = {};

    Object.keys(formData).forEach((key: string) => {
      const fieldValue = formData[key];

      if (fieldValue) {
        dataToSaveOnState = { ...dataToSaveOnState, [key]: fieldValue };
      }
    });

    signUpState(dataToSaveOnState);
    onPreviousFormStep();
  };

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
        const { birth_date, email, name, password } =
          handleFormatFormData(data);

        signUpState({ birth_date: data.birth_date, email, name, password });
        const {
          street,
          number,
          complement,
          neighborhood,
          zip_code,
          city,
          state,
          country,
          phone,
          cpf,
          invited_by,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          terms,
        } = registerUser;

        const requestBody = {
          birth_date,
          email,
          name,
          password,
          phone,
          cpf,
          invited_by: invited_by || null,
          address: {
            street,
            number,
            complement,
            neighborhood,
            zip_code,
            city,
            state,
            country,
          },
        };

        signUp(requestBody, {
          onSuccess: ({ token, refresh_token }) => {
            setCookie(undefined, TOKEN_STORAGE_KEY, token, {
              maxAge: 60 * 60 * 24 * 30,
              path: `/`,
            });

            setCookie(undefined, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
              maxAge: 60 * 60 * 24 * 30,
              path: `/`,
            });

            onUpdateFormStep();
          },
        });
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
          autoComplete="on"
        />

        <Input
          data-cy="signup_confirmPassword"
          typePassword
          name="password_confirmation"
          icon={FiLock}
          placeholder="Confirmar senha"
          onPaste={e => e.preventDefault()}
          autoComplete="on"
        />
        <Checkbox
          data-cy="signup_terms"
          type="checkbox"
          name="terms"
          style={{ margin: '24px 0' }}
        />
        <Button
          type="submit"
          data-cy="next-step-button"
          loading={isSignuping}
          disabled={isSignuping}
        >
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
        onClick={handlePreviousStep}
        disabled={isSignuping}
      >
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
