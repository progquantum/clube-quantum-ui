/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Plans } from 'components/Plans';

import { useMe } from 'hooks/user/useMe';

import { ModalCVC } from './ModalCVC';
import { SubscriptionButton } from './SubscriptionButton';
import { ModalBankAccount } from './ModalBankAccount';
import * as S from './styles';

export function SubscriptionsPage() {
  const { data } = useMe();
  const hasPlan = data?.subscription?.is_active;

  const [showModal, setShowModal] = useState(false);

  function handleRequestModal() {
    setShowModal(prevState => !prevState);
  }

  const [error, setError] = useState(false);

  function onError() {
    setError(true);
  }

  if (error) return <Error />;

  return (
    <>
      <title>Gerenciamento de plano - Clube Quantum</title>
      <Header />
      <S.Main>
        {hasPlan ? (
          <Plans
            button={
              <SubscriptionButton onOpenModalCvcRequest={handleRequestModal} />
            }
          >
            <ModalCVC
              modalIsOpen={showModal}
              onError={onError}
              onClose={handleRequestModal}
            />
          </Plans>
        ) : (
          <Plans
            button={
              <SubscriptionButton onOpenModalCvcRequest={handleRequestModal} />
            }
          >
            {showModal ? (
              <ModalBankAccount onRequestClose={handleRequestModal} />
            ) : null}
          </Plans>
        )}
      </S.Main>
      <Footer />
    </>
  );
}
