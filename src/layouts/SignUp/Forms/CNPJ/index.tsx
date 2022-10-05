import { FiUser } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { formatCNPJ } from 'utils/formatters/formatCNPJ';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { AuthLayout } from 'layouts/Auth';

import { CNPJProps, FormValues } from './types';
import { schema } from './schemas';

export function CNPJ({ onUpdateFormStep }: CNPJProps) {
  const { signUp } = useAuthDispatch();

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
      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input
          type="text"
          name="cnpj"
          placeholder="CNPJ"
          icon={FiUser}
          onChange={e =>
            formRef.current.setFieldValue('cnpj', formatCNPJ(e.target.value))
          }
        />

        <Button type="submit">Continuar</Button>
      </Form>
    </AuthLayout>
  );
}
