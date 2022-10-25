import { useCallback, useRef } from 'react';
import { FiPhone, FiLogOut } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';
import { useSendPhoneCode } from 'hooks/useSendPhoneCode';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { success } from 'helpers/notify/success';

import { PhoneProps, PhoneFormValues } from './types';
import { schema } from './schemas';

export function Phone({ onUpdateFormStep, onPreviousFormStep }: PhoneProps) {
  const { signUp } = useAuthDispatch();

  const formRef = useRef<FormHandles>(null);

  const { mutate: sendPhoneCodeRequest, isLoading: isSendingPhoneCode } =
    useSendPhoneCode();

  const handlePhoneCode: SubmitHandler<PhoneFormValues> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          const phone = `+55 ${data.phone}`;

          sendPhoneCodeRequest(
            { phone },
            {
              onSuccess: (_, variables) => {
                success(`Codigo enviado para o numero ${variables.phone}`);
                signUp({ phone });
                onUpdateFormStep();
              },
            },
          );
        })
        .catch(noop);
    },
    [signUp],
  );

  return (
    <AuthLayout
      backgroundImage="/images/signup.png"
      title="Insira seu telefone"
    >
      <Form ref={formRef} onSubmit={handlePhoneCode} className="form">
        <Input
          type="text"
          inputMode="tel"
          name="phone"
          placeholder="Telefone"
          icon={FiPhone}
          onChange={e =>
            formRef.current.setFieldValue(
              'phone',
              formatPhoneNumber(e.target.value),
            )
          }
        />
        <Button type="submit" loading={isSendingPhoneCode}>
          Continuar
        </Button>
      </Form>
      <button type="button" onClick={onPreviousFormStep}>
        <FiLogOut />
        Voltar
      </button>
    </AuthLayout>
  );
}
