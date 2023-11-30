import { useCallback, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';
import Link from 'next/link';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { useSearchParam } from 'react-use';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { formatCPF } from 'utils/formatters/formatCPF';
import { Button } from 'components/Button';
import { AuthLayout } from 'layouts/Auth';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { SIGN_UP_PAGE } from 'constants/routesPath';

import { CPFProps, FormValues } from './types';
import { schema } from './schemas';

export function CPF({ onUpdateFormStep }: CPFProps) {
  const { signUp } = useAuthDispatch();
  const invite = useSearchParam('invite');

  const formRef = useRef<FormHandles>(null);

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
    <AuthLayout backgroundImage="/images/signup.png" title="Insira seu CPF">
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
        <a className="anchor">
          <IoReturnDownBackSharp size={20} />
          Voltar
        </a>
      </Link>
    </AuthLayout>
  );
}
