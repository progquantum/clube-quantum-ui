import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import noop from 'lodash.noop';
import { useCallback, useRef } from 'react';
import { FiCalendar, FiCreditCard, FiLock, FiUser } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { AuthLayout } from 'layouts/Auth';
import { formatCVV } from 'utils/formatters/formatCVV';
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCardAddSpace';
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';

import { schema } from './schemas';
import * as S from './styles';
import { BankCardProps, CreditCardFormValues } from './types';

export function CreditCard({
  onUpdateFormStep,
  onNavigateToSuccessfulSignUp,
  onPreviousFormStep,
}: BankCardProps) {
  const { registerCreditCard } = useSubscriptionsDispatch();
  const formRef = useRef<FormHandles>(null);

  const handleSubmitCreditCard: SubmitHandler<CreditCardFormValues> =
    useCallback(data => {
      performSchemaValidation({
        data,
        schema,
        formRef,
      })
        .then(() => {
          registerCreditCard(data);
          onUpdateFormStep();
        })

        .catch(noop);
    }, []);

  return (
    <AuthLayout
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      title="Insira um cartão Banco Um"
    >
      <Form ref={formRef} onSubmit={handleSubmitCreditCard} className="form">
        <Input
          data-cy="signup_fullName"
          type="text"
          name="card_name"
          placeholder="Nome completo do titular"
          icon={FiUser}
        />
        <Input
          data-cy="signup_creditCardNumber"
          type="text"
          inputMode="numeric"
          name="card_number"
          placeholder="Número do cartão"
          icon={FiCreditCard}
          onChange={e =>
            formRef.current.setFieldValue(
              'card_number',
              formatCreditCardAddSpace(e.target.value),
            )
          }
        />
        <Input
          data-cy="signup_expirationDate"
          type="text"
          inputMode="numeric"
          name="expiration_date"
          placeholder="Data de vencimento Ex: 11/2023"
          icon={FiCalendar}
          onChange={e =>
            formRef.current.setFieldValue(
              'expiration_date',
              formatCreditCardExpiration(e.target.value),
            )
          }
        />
        <Input
          data-cy="signup_cvv"
          type="text"
          name="cvc"
          inputMode="numeric"
          placeholder="CVV"
          icon={FiLock}
          onChange={e =>
            formRef.current.setFieldValue('cvc', formatCVV(e.target.value))
          }
        />

        <Button data-cy="next-step-button" type="submit">
          Continuar
        </Button>
        <S.JumpStepButton onClick={onNavigateToSuccessfulSignUp}>
          Pular etapa
        </S.JumpStepButton>
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
