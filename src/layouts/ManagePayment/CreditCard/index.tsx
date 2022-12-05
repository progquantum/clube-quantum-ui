import { useState } from 'react';
import { RiBankCard2Line } from 'react-icons/ri';
import { useRouter } from 'next/router';

import { IoCard } from 'react-icons/io5';

import { Button } from 'components/Button';

import { VISAIcon } from 'components/Illustrations/Visa';
import { MasterCardIcon } from 'components/Illustrations/MasterCard';
import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';
import EloIcon from 'components/Illustrations/Elo';

import { SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { Modal } from './Modal';
import { CreditCardProps } from './types';
import * as S from './styles';

export function CreditCard({ user }: CreditCardProps) {
  const [showModal, setShowModal] = useState(false);

  const checkCreditCardType = (brand: string) => {
    let creditCardIcon: any;

    switch (brand) {
      case 'VISA':
        creditCardIcon = <VISAIcon width="80" height="43" />;
        break;
      case 'MASTERCARD':
        creditCardIcon = <MasterCardIcon width="80" height="43" />;
        break;
      case 'ELO':
        creditCardIcon = <EloIcon width="80" height="43" />;
        break;
      case 'AMEX':
        creditCardIcon = <AmericanExpressIcon width="80" height="43" />;
        break;
      default:
        creditCardIcon = <IoCard width="80" height="43" />;
    }

    return creditCardIcon;
  };

  const CreditCardIcon = () => checkCreditCardType(user?.credit_card.brand);

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  const { push } = useRouter();
  const handleRedirectPage = () => {
    push(SUBSCRIPTIONS_PAGE);
  };

  const cardLastDigits = user?.credit_card.last_digits;
  const cardExpirationDate = user?.credit_card.expiration_date;
  const hasCreditCard = user?.credit_card.last_digits;

  return (
    <>
      <S.Content>
        {hasCreditCard ? (
          <>
            <S.YourAccount>
              <RiBankCard2Line />
              <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
            </S.YourAccount>

            <S.CardDetails>
              <S.CardNumber>
                <p>
                  xxxx xxxx xxxx
                  <S.LastDigits> {cardLastDigits}</S.LastDigits>
                </p>
                <p>{cardExpirationDate}</p>
              </S.CardNumber>

              {CreditCardIcon && <CreditCardIcon />}
            </S.CardDetails>

            <Button onClick={handleRequestModal}>Atualizar cartão</Button>
          </>
        ) : (
          <>
            <S.YourAccount>
              <RiBankCard2Line />
              <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
            </S.YourAccount>

            <S.TextContent>
              Para cadastrar um cartão de crédito e aproveitar os benefícios
              clube quantum é necessário realizar uma assinatura.
            </S.TextContent>
            <Button onClick={handleRedirectPage}>Prosseguir</Button>
          </>
        )}
      </S.Content>

      {showModal && <Modal onRequestClose={handleRequestModal} />}
    </>
  );
}
