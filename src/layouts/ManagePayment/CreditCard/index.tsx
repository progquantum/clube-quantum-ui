import { useState } from 'react';
import { RiBankCard2Line } from 'react-icons/ri';

import { useRouter } from 'next/router';

import { Button } from 'components/Button';
import { VISAIcon } from 'components/Illustrations/Visa';

import { SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { Skeleton } from '../Skeleton';
import { Modal } from './Modal';
import { CreditCardProps } from './types';
import * as S from './styles';

export function CreditCard({ user, loading }: CreditCardProps) {
  const [showModal, setShowModal] = useState(false);

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

  if (loading) return <Skeleton />;

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
                  <S.LastDigits>{cardLastDigits}</S.LastDigits>
                </p>
                <p>{cardExpirationDate}</p>
              </S.CardNumber>

              <VISAIcon width="80" height="43" />
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
