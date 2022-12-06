/* eslint-disable no-nested-ternary */
import { RiBankCard2Line, RiBankLine } from 'react-icons/ri';

import { useRouter } from 'next/router';

import { useSubscription } from 'hooks/useSubscription';

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';
import { formatPrice } from 'utils/formatters/formatPrice';

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext';
import { formatCreditCardRemoveSpace } from 'utils/formatters/formatCreditCardRemoveSpace';

import { Modal } from 'components/Modal';

import { success } from 'helpers/notify/success';
import { error } from 'helpers/notify/error';

import { DASHBOARD_PAGE } from 'constants/routesPath';

import { useWallet } from 'hooks/useWallet';

import { ModalProps } from './types';
import * as S from './styles';

export function FinishedPage({
  onRequestClose,
  onPreviousFormStep,
}: ModalProps) {
  const { mutate: creatSubscription, isLoading: isCreating } =
    useSubscription();

  const { plan, bankAccount, creditCard } = useSubscriptionsState();

  const { data } = useWallet();

  const hasBankAccountRegistered = data?.bank_account.current_account;
  const accountNumber = data?.bank_account.current_account;
  const lastDigit = data?.bank_account.current_account_check_number;
  const owner = data?.bank_account.holder_name;

  const hasBankAccount = bankAccount?.holder_name;

  const router = useRouter();

  const handleSubscription = () => {
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
        onSuccess: () => {
          success('Plano contratado com sucesso!');
          router.push(DASHBOARD_PAGE);
        },
        onError: err => {
          const response = err as Response;
          if (response.status) {
            error(
              'Verifique se no seu cartão tem pelo menos R$1,00 para fazermos a verificação da autenticidade do mesmo.',
            );
          }
        },
      },
    );
  };

  const handleSubscriptionWithoutBankAccount = () => {
    const { plan_id, plan_duration } = plan;
    const { card_name, card_number, expiration_date, cvc } = creditCard;
    creatSubscription(
      {
        plan: {
          plan_id,
          plan_duration,
        },
        credit_card: {
          card_name,
          card_number: formatCreditCardRemoveSpace(card_number),
          expiration_date,
          cvc,
        },
      },
      {
        onSuccess: () => {
          success('Plano contratado com sucesso!');
          router.push(DASHBOARD_PAGE);
        },
        onError: err => {
          const response = err as Response;
          if (response.status) {
            error(
              'Verifique se no seu cartão tem pelo menos R$1,00 para fazermos a verificação da autenticidade do mesmo.',
              6000,
            );
          }
        },
      },
    );
  };

  const formattedPlanName = formatFirstLetterToUppercase(plan?.plan_name);
  const planPeriod = plan?.plan_period;
  const formattedPrice = formatPrice(plan?.price);
  const holderName = bankAccount?.holder_name;
  const cardName = creditCard?.card_name;
  const cardNumber = creditCard?.card_number;
  const cardCVC = creditCard?.cvc;
  const expirationDate = creditCard?.expiration_date;
  const formattedBankAccount = `${bankAccount?.current_account}-${bankAccount?.current_account_check_number}`;
  return (
    <Modal onClose={onRequestClose}>
      <S.Container>
        <S.Plan>
          <S.TitlePlan>{formattedPlanName}</S.TitlePlan>
          <S.CardDataContainer>
            <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
            <S.CardDataText>
              {planPeriod === 'monthly'
                ? 'Mensal'
                : planPeriod === 'semiannual'
                ? 'Semestral'
                : 'Anual'}
            </S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Total</S.CardDataTitle>
            <S.CardDataText>{formattedPrice}</S.CardDataText>
          </S.CardDataContainer>
        </S.Plan>

        {hasBankAccountRegistered ? (
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
              <S.CardDataText>
                {accountNumber}-{lastDigit}
              </S.CardDataText>
            </S.CardDataContainer>
            <S.CardDataContainer>
              <S.CardDataTitle>Titular</S.CardDataTitle>
              <S.CardDataText>{owner}</S.CardDataText>
            </S.CardDataContainer>
          </S.Bank>
        ) : null}

        {hasBankAccount ? (
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
        ) : null}

        <S.CreditCard>
          <S.Title>
            <RiBankCard2Line />
            Cartão cadastrado
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
        <S.ConfirmButton
          onClick={
            hasBankAccount === undefined
              ? handleSubscriptionWithoutBankAccount
              : handleSubscription
          }
          loading={isCreating}
        >
          Finalizar
        </S.ConfirmButton>

        <S.ReturnButton
          onClick={onPreviousFormStep}
          variant="danger_outline"
          type="button"
        >
          Voltar
        </S.ReturnButton>
      </S.Container>
    </Modal>
  );
}
