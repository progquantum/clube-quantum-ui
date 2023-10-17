import { useRef, useCallback } from 'react';
import { FiCalendar, FiCreditCard, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCardAddSpace';
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';
import { formatCVV } from 'utils/formatters/formatCVV';

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';

import { BankCardProps, CreditCardFormValues } from './types';
import * as S from './styles';
import { schema } from './schemas';

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
      backgroundImage="/images/signup.png"
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
          placeholder="Data de vencimento"
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

      <button type="button" onClick={onPreviousFormStep}>
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
