import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
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
import { formatCNPJ } from 'utils/formatters/formatCNPJ';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { schema } from './schemas';
import { CNPJProps, FormValues } from './types';

export function CNPJ({ onUpdateFormStep }: CNPJProps) {
  const { signUp } = useAuthDispatch();
  const { registerUser } = useAuthState();
  const invite = useSearchParam('invite');

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (registerUser) {
      const { cnpj } = registerUser;

      if (cnpj) {
        formRef.current.setFieldValue('cnpj', cnpj);
      }
    }
  }, []);

  const handleSignUp: SubmitHandler<FormValues> = useCallback(data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    }).then(() => {
      signUp(data);
      onUpdateFormStep();
    });
  }, []);

  return (
    <AuthLayout
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      title="Insira seu CNPJ"
    >
      <Form ref={formRef} onSubmit={handleSignUp} className="form">
        <Input
          type="text"
          inputMode="numeric"
          name="cnpj"
          placeholder="CNPJ"
          data-cy="cnpj-input"
          icon={FiUser}
          onChange={e =>
            formRef.current.setFieldValue('cnpj', formatCNPJ(e.target.value))
          }
        />

        <Button type="submit" data-cy="next-step-button">
          Continuar
        </Button>
      </Form>

      {/* Should wrap link component with element due to this
      issue of next/link https://github.com/vercel/next.js/issues/127 */}
      <Link href={{ pathname: SIGN_UP_PAGE, query: { invite } }} legacyBehavior>
        <a
          style={{
            display: 'flex',
            width: '100%',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'transparent',
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
