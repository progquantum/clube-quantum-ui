import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { useSearchParam } from 'react-use';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { SIGN_UP_PAGE } from 'constants/routesPath';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { AuthLayout } from 'layouts/Auth';
import { formatCPF } from 'utils/formatters/formatCPF';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { schema } from './schemas';
import { CPFProps, FormValues } from './types';

export function CPF({ onUpdateFormStep }: CPFProps) {
  const { signUp } = useAuthDispatch();
  const { registerUser } = useAuthState();

  const invite = useSearchParam('invite');

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (registerUser) {
      const { cpf } = registerUser;

      if (cpf) {
        formRef.current.setFieldValue('cpf', cpf);
      }
    }
  }, []);

  const handleCPFSubmit: SubmitHandler<FormValues> = useCallback(data => {
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
    <AuthLayout
      title="Insira seu CPF"
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
    >
      <Form ref={formRef} onSubmit={handleCPFSubmit} className="form">
        <Input
          data-cy="cpf-input"
          type="text"
          inputMode="numeric"
          name="cpf"
          placeholder="CPF"
          icon={FiUser}
          onChange={e =>
            formRef.current.setFieldValue('cpf', formatCPF(e.target.value))
          }
        />

        <Button type="submit" data-cy="next-step-button">
          Continuar
        </Button>
      </Form>
      <Link href={{ pathname: SIGN_UP_PAGE, query: { invite } }} legacyBehavior>
        <a
          style={{
            display: 'flex',
            width: '100%',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
          className="anchor"
        >
          <IoReturnDownBackSharp size={20} />
          Voltar
        </a>
      </Link>
    </AuthLayout>
  );
}
