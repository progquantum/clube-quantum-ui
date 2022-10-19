import { useCallback, useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';
import Link from 'next/link';
import Head from 'next/head';
import noop from 'lodash.noop';

import { Input } from 'components/Input';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { FORGOT_PASSWORD_PAGE, SIGN_UP_PAGE } from 'constants/routesPath';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { Button } from 'components/Button';
import { formatCPForCNPJ } from 'utils/formatters/formatCPForCNPJ';

import { SignInFormValues } from './types';
import { schema } from './schemas';

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
        .then(() => signIn(data))
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
        backgroundImage="/images/signin.png"
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
          <Link href={FORGOT_PASSWORD_PAGE} prefetch>
            <a className="form-anchor">Esqueceu a sua senha?</a>
          </Link>
        </Form>

        <Link href={SIGN_UP_PAGE} prefetch>
          <a className="anchor">
            <FiLogIn />
            Criar uma conta
          </a>
        </Link>
      </AuthLayout>
    </>
  );
}
