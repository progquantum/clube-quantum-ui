import { MdAssignmentInd } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

import { useSubscription } from 'hooks/useSubscription';
import { BancoUm } from 'components/Illustrations/BancoUm';
import { CreditCardIcon } from 'components/Illustrations/CreditCard';
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';
import { formatPrice } from 'utils/formatters/formatPrice';

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext';

import { formatCreditCardRemoveSpace } from 'utils/formatters/formatCreditCardRemoveSpace';

import { AuthLayout } from 'layouts/Auth';

import { Button } from 'components/Button';

import { SummaryProps } from './types';
import * as S from './styles';

export function Summary({
  onUpdateFormStep,
  onPreviousFormStep,
}: SummaryProps) {
  const { mutate: creatSubscription, isLoading: isCreating } =
    useSubscription();
  const { colors } = useTheme();
  const { plan, bankAccount, creditCard } = useSubscriptionsState();

  const handleSubscriptionSubmit = () => {
    const { plan_id, plan_duration } = plan;
    const { current_account, current_account_check_number, holder_name } =
      bankAccount;
    const { card_name, card_number, expiration_date, cvc } = creditCard;
    creatSubscription(
      {
        plan: {
          plan_id,
          plan_duration,
        },
        bank_account: {
          current_account,
          current_account_check_number,
          holder_name,
        },
        credit_card: {
          card_name,
          card_number: formatCreditCardRemoveSpace(card_number),
          expiration_date,
          cvc,
        },
      },
      {
        onSuccess: () => onUpdateFormStep(),
      },
    );
  };

  const formattedPlanName = formatFirstLetterToUppercase(plan?.plan_name);
  const planDuration =
    // eslint-disable-next-line no-nested-ternary
    plan?.plan_duration === 6
      ? 'Semestral'
      : plan?.plan_duration === 1
      ? 'Mensal'
      : 'Anual';
  const formattedPrice = formatPrice(plan?.price);
  const holderName = bankAccount?.holder_name;
  const cardName = creditCard?.card_name;
  const cardNumber = creditCard?.card_number;
  const cardCVC = creditCard?.cvc;
  const expirationDate = creditCard?.expiration_date;
  const formattedBankAccount = `${bankAccount?.current_account}-${bankAccount?.current_account_check_number}`;
  return (
    <AuthLayout backgroundImage="/images/signup.png">
      <S.Container className="form">
        <S.TitleFinished>Resumo da conta</S.TitleFinished>
        <S.Plan>
          <S.Title>
            <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
            Seu plano escolhido
          </S.Title>
          <S.TitlePlan>{formattedPlanName}</S.TitlePlan>
          <S.CardDataContainer>
            <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
            <S.CardDataText>{planDuration}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Total</S.CardDataTitle>
            <S.CardDataText>{formattedPrice}</S.CardDataText>
          </S.CardDataContainer>
        </S.Plan>
        <S.Bank>
          <S.Title>
            <BancoUm width="10.32" height="15" color={colors.mediumslateBlue} />
            Sua conta do Banco Um
          </S.Title>
          <S.CardDataContainer>
            <S.CardDataTitle>Cód. Banco</S.CardDataTitle>
            <S.CardDataText>396 - Banco Um</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Agência</S.CardDataTitle>
            <S.CardDataText>0001</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Conta</S.CardDataTitle>
            <S.CardDataText>{formattedBankAccount}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Titular</S.CardDataTitle>
            <S.CardDataText>{holderName}</S.CardDataText>
          </S.CardDataContainer>
        </S.Bank>
        <S.CreditCard>
          <S.Title>
            <CreditCardIcon
              width="22"
              height="16"
              color={colors.mediumslateBlue}
            />
            Seu cartão cadastrado
          </S.Title>
          <S.CardDataContainer>
            <S.CardDataTitle>Nome</S.CardDataTitle>
            <S.CardDataText>{cardName}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Cartão</S.CardDataTitle>
            <S.CardDataText>{cardNumber}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>CVC</S.CardDataTitle>
            <S.CardDataText>{cardCVC}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Validade</S.CardDataTitle>
            <S.CardDataText>{expirationDate}</S.CardDataText>
          </S.CardDataContainer>
        </S.CreditCard>
        <S.DivButton>
          <Button onClick={handleSubscriptionSubmit} loading={isCreating}>
            Finalizar
          </Button>
        </S.DivButton>
      </S.Container>

      <button onClick={onPreviousFormStep} type="button">
        <FiLogOut />
        Voltar
      </button>
    </AuthLayout>
  );
}
