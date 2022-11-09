/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import { ManagePlans } from 'components/ManagePlans';
import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Plans } from 'components/Plans';

import { useMe } from 'hooks/user/useMe';

import { ModalCVC } from './ModalCVC';
import * as S from './styles';
import { SubscriptionButton } from './SubscriptionButton';
import { ModalBankAccount } from './ModalBankAccount';

export function SubscriptionsPage() {
  const { data } = useMe();
  const hasPlan = data?.subscription?.is_active;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
            button={<SubscriptionButton onOpenModalCvcRequest={openModal} />}
          >
            <ModalCVC
              modalIsOpen={modalIsOpen}
              onError={onError}
              onClose={closeModal}
            />
          </Plans>
        ) : (
          <Plans
            button={<SubscriptionButton onOpenModalCvcRequest={openModal} />}
          >
            {modalIsOpen ? (
              <ModalBankAccount onRequestClose={closeModal} />
            ) : null}
            <ManagePlans width="350" />
          </Plans>
        )}
      </S.Main>
      <Footer />
    </>
  );
}
