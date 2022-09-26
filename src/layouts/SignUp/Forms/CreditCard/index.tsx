import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiCalendar, FiCreditCard, FiLock, FiUser } from 'react-icons/fi';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { creditCardSchema } from 'schemas/signUp';
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCardAddSpace';
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration';
import { VISAIcon } from 'components/Illustrations/Visa';

import { BankCardProps } from './types';
import * as S from './styles';

export function CreditCard({
  onUpdateFormStep,
  onNavigateToSuccessfulSignUp,
  onPreviousFormStep,
}: BankCardProps) {
  const { control, handleSubmit, formState, register, setValue } = useForm({
    resolver: yupResolver(creditCardSchema),
  });

  const { isDirty, isSubmitting } = formState;
  const isButtonDisabled = !isDirty || isSubmitting;

  function onSubmit() {
    onUpdateFormStep();
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Nome do cartão"
        name="card_name"
        control={control}
        placeholder="Nome completo do titular"
        icon={FiUser}
      />

      <Input
        type="text"
        label="Número do cartão"
        name="card_number"
        control={control}
        placeholder="Número do cartão"
        icon={FiCreditCard}
        {...register('card_number', {
          onChange: e => {
            setValue('card_number', formatCreditCardAddSpace(e.target.value));
          },
        })}
      />

      <Input
        type="text"
        label="Data de vencimento"
        name="expiration_date"
        control={control}
        placeholder="Data de vencimento"
        icon={FiCalendar}
        {...register('expiration_date', {
          onChange: e => {
            setValue(
              'expiration_date',
              formatCreditCardExpiration(e.target.value),
            );
          },
        })}
      />

      <Input
        type="text"
        label="CVC"
        name="cvc"
        control={control}
        placeholder="CVC"
        icon={FiLock}
      />

      <S.ButtonGroup>
        <Button type="submit" disabled={isButtonDisabled}>
          Continuar
        </Button>
        <Button variant="secondary" onClick={onPreviousFormStep}>
          Voltar
        </Button>
      </S.ButtonGroup>
      <S.JumpStepButton onClick={onNavigateToSuccessfulSignUp}>
        Pular esta etapa
      </S.JumpStepButton>
    </S.Form>
  );
}
