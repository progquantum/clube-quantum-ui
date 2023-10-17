import { RiBankCard2Line, RiBankLine, RiStackLine } from 'react-icons/ri';

import { IoReturnDownBackSharp } from 'react-icons/io5';

import { parseCookies } from 'nookies';

import { AxiosError } from 'axios';

import { useSubscription } from 'hooks/subscriptions/useSubscription';

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';
import { formatPrice } from 'utils/formatters/formatPrice';

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext';

import { formatCreditCardRemoveSpace } from 'utils/formatters/formatCreditCardRemoveSpace';

import { AuthLayout } from 'layouts/Auth';

import { Button } from 'components/Button';

import { TOKEN_STORAGE_KEY } from 'constants/storage';

import { quantumClientQueue } from 'config/client';

import { ErrorResponse } from 'services/httpServices';

import { error } from 'helpers/notify/error';

import { SummaryProps } from './types';
import * as S from './styles';

export function Summary({
  onUpdateFormStep,
  onPreviousFormStep,
}: SummaryProps) {
  const { mutate: creatSubscription, isLoading: isCreating } =
    useSubscription();
  const cookies = parseCookies();
  const { plan, bankAccount, creditCard } = useSubscriptionsState();

  const handleSubscriptionSubmit = () => {
    const { plan_id, plan_duration } = plan;
    const { current_account, current_account_check_number, holder_name } =
      bankAccount;
    const { card_name, card_number, expiration_date, cvc } = creditCard;

    quantumClientQueue.defaults.headers.common.Authorization = `Bearer ${cookies[TOKEN_STORAGE_KEY]}`;
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
        onError: (data: AxiosError<ErrorResponse>) =>
          data.response.data.message ===
            'This bank account is already being used by another user' &&
          error('Esta conta bancária já está em uso'),
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
            <RiStackLine size={18} />
            Seu plano escolhido
          </S.Title>
          <S.TitlePlan data-cy="signup_planName">
            {formattedPlanName}
          </S.TitlePlan>
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
            <RiBankLine />
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
            <RiBankCard2Line />
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

        <Button
          data-cy="next-step-button"
          onClick={handleSubscriptionSubmit}
          loading={isCreating}
        >
          Finalizar
        </Button>
        <S.Back onClick={onPreviousFormStep} type="button">
          <IoReturnDownBackSharp size={20} />
          Voltar
        </S.Back>
      </S.Container>
    </AuthLayout>
  );
}
