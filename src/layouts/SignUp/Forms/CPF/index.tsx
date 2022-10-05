import { useCallback, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { formatCPF } from 'utils/formatters/formatCPF';
import { Button } from 'components/Button';
import { AuthLayout } from 'layouts/Auth';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { CPFProps, FormValues } from './types';
import { schema } from './schemas';

export function CPF({ onUpdateFormStep }: CPFProps) {
  const { signUp } = useAuthDispatch();

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
      <Form ref={formRef} onSubmit={handleCPFSubmit}>
        <Input
          type="text"
          name="cpf"
          placeholder="CPF"
          icon={FiUser}
          onChange={e =>
            formRef.current.setFieldValue('cpf', formatCPF(e.target.value))
          }
        />

        <Button type="submit">Continuar</Button>
      </Form>
    </AuthLayout>
  );
}
