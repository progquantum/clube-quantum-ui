import { useState } from 'react';
import { MdAssignmentInd } from 'react-icons/md';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import { AxiosError } from 'axios';

import { useSubscription } from 'hooks/useSubscription';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { SideBar } from 'components/SideBar';
import { Error } from 'components/Error';
import { Successful } from 'components/Successful';
import { BancoUm } from 'components/Illustrations/BancoUm';
import { CreditCardIcon } from 'components/Illustrations/CreditCard';
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';
import { formatPrice } from 'utils/formatters/formatPrice';
import { CREDIT_CARD_PAGE } from 'constants/routesPath';
import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext';
import { error } from 'helpers/notify/error';

import { formatCreditCardRemoveSpace } from 'utils/formatters/formatCreditCardRemoveSpace';

import { ErrorResponse } from './types';

import * as S from './styles';

export function FinishedPage() {
  const { mutate: creatSubscription, isLoading: isCreating } =
    useSubscription();
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
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
        onSuccess: () => setIsSuccessful(true),
        onError: (err: AxiosError<ErrorResponse>) => {
          const userHasBankAccountError =
            err.response.data.statusCode === 409 &&
            err.response.data.message ===
              'This user already owns a bank account';

          const unexpectedError =
            err.response.status >= 400 &&
            err.response.status < 500 &&
            err.response.data.message !==
              'This user already owns a bank account';

          if (userHasBankAccountError) {
            error('Este usuário já possui uma conta bancária cadastrada');
          }

          if (unexpectedError) {
            setIsError(true);
          }
        },
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
    <>
      <Header />
      <S.Main>
        {!isError ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {!isSuccessful ? (
              <>
                <SideBar />
                <S.Container>
                  <S.TitleFinished>Resumo da conta</S.TitleFinished>
                  <S.Plan>
                    <S.Title>
                      <MdAssignmentInd
                        size={19.87}
                        color={colors.mediumslateBlue}
                      />
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
                      <BancoUm
                        width="10.32"
                        height="15"
                        color={colors.mediumslateBlue}
                      />
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
                  <S.ConfirmButton
                    onClick={handleSubscriptionSubmit}
                    loading={isCreating}
                  >
                    Finalizar
                  </S.ConfirmButton>
                  <Link href={CREDIT_CARD_PAGE}>
                    <S.ReturnButton variant="secondary" type="button">
                      Voltar
                    </S.ReturnButton>
                  </Link>
                </S.Container>
              </>
            ) : (
              <Successful />
            )}
          </>
        ) : (
          <Error />
        )}
      </S.Main>
      <Footer />
    </>
  );
}
