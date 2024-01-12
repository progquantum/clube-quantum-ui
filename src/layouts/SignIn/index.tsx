import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { FiLock, FiLogIn, FiUser } from 'react-icons/fi';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { FORGOT_PASSWORD_PAGE, SIGN_UP_PAGE } from 'constants/routesPath';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { AuthLayout } from 'layouts/Auth';
import { formatCPForCNPJ } from 'utils/formatters/formatCPForCNPJ';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { schema } from './schemas';
import { SignInFormValues } from './types';

export function SignInPage() {
  const { signIn } = useAuthDispatch();
  const { loading } = useAuthState();

  const formRef = useRef<FormHandles>(null);

  const handleSignIn: SubmitHandler<SignInFormValues> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          signIn(data);
        })
        .catch(noop);
    },
    [signIn],
  );

  return (
    <>
      <Head>
        <title>Acesse sua conta - Clube Quantum</title>
      </Head>

      <AuthLayout
        title="Faça seu login"
        backgroundImage="/images/signin.svg"
        backgroundPosition="right"
      >
        <Form ref={formRef} onSubmit={handleSignIn} className="form">
          <Input
            type="text"
            name="login"
            autoCapitalize="none"
            placeholder="CPF/CNPJ"
            onChange={e =>
              formRef.current.setFieldValue(
                'login',
                formatCPForCNPJ(e.target.value),
              )
            }
            icon={FiUser}
            inputMode="numeric"
          />

          <Input
            typePassword
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit" loading={loading} disabled={loading}>
            Login
          </Button>

          {/* Should wrap link component with element due to this
          issue of next/link https://github.com/vercel/next.js/issues/127 */}
          <Link href={FORGOT_PASSWORD_PAGE} legacyBehavior>
            <a className="form-anchor">Esqueceu a sua senha?</a>
          </Link>
        </Form>

        <Link href={SIGN_UP_PAGE} legacyBehavior>
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
            data-cy="signup-link"
          >
            <FiLogIn />
            Criar uma conta
          </a>
        </Link>
      </AuthLayout>
    </>
  );
}
