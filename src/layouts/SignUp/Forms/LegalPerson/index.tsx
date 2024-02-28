import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import { setCookie } from 'nookies';
import { useCallback, useEffect, useRef } from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import {
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from 'constants/storage';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { useLegalPersonSignUp } from 'hooks/auth/useLegalPersonSignUp';
import { AuthLayout } from 'layouts/Auth';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { schema } from './schemas';
import { LegalPersonProps, SignUpFormValues } from './types';

export function LegalPerson({
  onUpdateFormStep,
  onPreviousFormStep,
}: LegalPersonProps) {
  const { registerUser } = useAuthState();
  const { signUp: signUpState } = useAuthDispatch();
  const { mutate: signUp, isLoading: isSignuping } = useLegalPersonSignUp();
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (registerUser) {
      const fields = ['company_name', 'email', 'password'];

      fields.forEach((field: string) => {
        const fieldValue = registerUser[field];
        if (fieldValue) {
          if (field === 'email' || field === 'password') {
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
      if (key === 'email_confirmation' || key === 'password_confirmation')
        return;

      const fieldValue = formData[key];

      if (fieldValue) {
        dataToSaveOnState = { ...dataToSaveOnState, [key]: fieldValue };
      }
    });

    signUpState(dataToSaveOnState);
    onPreviousFormStep();
  };

  const handleSignUp: SubmitHandler<SignUpFormValues> = useCallback(data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    })
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {
          password_confirmation,
          email_confirmation,
          company_name,
          ...rest
        } = data;
        signUpState({ company_name });
        const {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          terms,
          city,
          cnpj,
          complement,
          country,
          neighborhood,
          number,
          phone,
          state,
          street,
          zip_code,
          invited_by,
        } = registerUser;

        const requestBody = {
          cnpj,
          phone,
          company_name,
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
          ...rest,
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
      title="Insira os dados da empresa"
    >
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
          autoComplete="on"
          icon={FiLock}
        />
        <Input
          typePassword
          name="password_confirmation"
          data-cy="password_confirmation"
          placeholder="Confirmar senha"
          icon={FiLock}
          autoComplete="on"
          onPaste={e => e.preventDefault()}
        />

        <Button
          type="submit"
          data-cy="next-step-button"
          loading={isSignuping}
          disabled={isSignuping}
        >
          Continuar
        </Button>
        <Checkbox
          type="checkbox"
          name="terms"
          data-cy="terms"
          style={{ margin: '24px 0' }}
        />
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
        disabled={isSignuping}
        type="button"
        onClick={handlePreviousStep}
      >
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
