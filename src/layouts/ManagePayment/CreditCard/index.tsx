import { useTheme } from 'styled-components';

import { useState } from 'react';

import { CreditCardIcon } from 'components/Illustrations/CreditCard';

import { Button } from 'components/Button';

import { VISAIcon } from 'components/Illustrations/Visa';

import { Skeleton } from '../Skeleton';
import { ModalCreditCard } from './ModalCreditCard';
import { CreditCardProps } from './types';
import * as S from './styles';

export function CreditCard({ user, loading }: CreditCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  const { colors } = useTheme();

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
              <CreditCardIcon color={colors.gray[100]} width="20" height="14" />
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
              <CreditCardIcon color={colors.gray[100]} width="20" height="14" />
              <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
            </S.YourAccount>

            <S.TextContent>
              Para cadastrar um cartão de crédito e aproveitar os benefícios
              clube quantum é necessário realizar uma assinatura.
            </S.TextContent>
            <Button>Prosseguir</Button>
          </>
        )}
      </S.Content>

      {showModal && <ModalCreditCard onRequestClose={handleRequestModal} />}
    </>
  );
}
