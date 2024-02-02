import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import { useCallback, useEffect, useRef } from 'react';
import { FiPhone } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { success } from 'helpers/notify/success';
import { useSendPhoneCode } from 'hooks/phones/useSendPhoneCode';
import { AuthLayout } from 'layouts/Auth';
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { schema } from './schemas';
import { PhoneFormValues, PhoneProps } from './types';

export function Phone({ onUpdateFormStep, onPreviousFormStep }: PhoneProps) {
  const { signUp } = useAuthDispatch();
  const { registerUser } = useAuthState();

  const formRef = useRef<FormHandles>(null);

  const { mutate: sendPhoneCodeRequest, isLoading: isSendingPhoneCode } =
    useSendPhoneCode();

  useEffect(() => {
    if (registerUser) {
      const { phone } = registerUser;

      if (phone) {
        const rawPhone = phone.slice(4, phone.length);

        formRef.current.setFieldValue('phone', rawPhone);
      }
    }
  }, []);

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
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      title="Insira seu telefone"
    >
      <Form ref={formRef} onSubmit={handlePhoneCode} className="form">
        <Input
          data-cy="phone-input"
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
        <Button
          type="submit"
          loading={isSendingPhoneCode}
          data-cy="next-step-button"
        >
          Continuar
        </Button>
      </Form>
      <button
        style={{
          display: 'flex',
          width: '100%',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'transparent',
        }}
        type="button"
        onClick={onPreviousFormStep}
      >
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
