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
import { ShowPasswordInput } from 'components/Input/ShowPassword';
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

      <AuthLayout title="Faça seu login" backgroundImage="/images/signin.png">
        <Form ref={formRef} onSubmit={handleSignIn}>
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
          />

          <ShowPasswordInput
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit" loading={loading} disabled={loading}>
            Login
          </Button>

          <Link href={FORGOT_PASSWORD_PAGE} prefetch>
            Esqueceu a sua senha?
          </Link>
        </Form>

        <Link href={SIGN_UP_PAGE} prefetch>
          <a>
            <FiLogIn />
            Criar uma conta
          </a>
        </Link>
      </AuthLayout>
    </>
  );
}
