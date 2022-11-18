/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Plans } from 'components/Plans';

import { useMe } from 'hooks/user/useMe';

import { useWallet } from 'hooks/useWallet';

import { ModalCVC } from './ModalCVC';
import { SubscriptionButton } from './SubscriptionButton';
import { ModalBankAccount } from './ModalBankAccount';
import * as S from './styles';
import { ModalCreditCard } from './ModalCreditCard';

export function SubscriptionsPage() {
  const { data } = useMe();

  const { data: account } = useWallet();

  const hasPlan = data?.subscription?.is_active;
  const hasBankAccount = account?.bank_account.current_account;

  const [showModal, setShowModal] = useState(false);
  const [bankAccountModal, setBankAccountModal] = useState(false);

  function handleRequestModal() {
    setShowModal(prevState => !prevState);
  }

  function handleRequestBankAccountModal() {
    setBankAccountModal(prevState => !prevState);
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
              <SubscriptionButton
                onOpenModalCvcRequest={
                  hasBankAccount
                    ? handleRequestModal
                    : handleRequestBankAccountModal
                }
              />
            }
          >
            {bankAccountModal && (
              <ModalBankAccount
                onRequestClose={handleRequestBankAccountModal}
              />
            )}
            {showModal && (
              <ModalCreditCard onRequestClose={handleRequestModal} />
            )}
          </Plans>
        )}
      </S.Main>
      <Footer />
    </>
  );
}
