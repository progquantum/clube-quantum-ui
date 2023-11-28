import { FiUser } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import Link from 'next/link';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { useSearchParam } from 'react-use';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { formatCNPJ } from 'utils/formatters/formatCNPJ';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { AuthLayout } from 'layouts/Auth';
import { SIGN_UP_PAGE } from 'constants/routesPath';

import { CNPJProps, FormValues } from './types';
import { schema } from './schemas';

export function CNPJ({ onUpdateFormStep }: CNPJProps) {
  const { signUp } = useAuthDispatch();
  const invite = useSearchParam('invite');

  const formRef = useRef<FormHandles>(null);

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
    <AuthLayout backgroundImage="/images/signup.png" title="Insira seu CNPJ">
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
        <a className="anchor">
          <IoReturnDownBackSharp size={20} />
          Voltar
        </a>
      </Link>
    </AuthLayout>
  );
}
