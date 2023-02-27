/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import { Plans } from 'components/Plans';

import { useMe } from 'hooks/user/useMe';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import { ModalCVC } from './ModalCVC';
import { SubscriptionButton } from './SubscriptionButton';
import { ModalBankAccount } from './ModalBankAccount';
import * as S from './styles';
import { ModalCreditCard } from './ModalCreditCard';
import { FinishedPage } from './Finished';

export function SubscriptionsPage() {
  const { data } = useMe();
  const hasPlan = data?.subscription?.is_active;

  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);

  function handleRequestModal() {
    setShowModal(prevState => !prevState);
    setStep(0);
  }
  const nextStep = () => {
    setStep(prevState => prevState + 1);
  };

  const previousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const stepsMapping = {
    0: (
      <ModalBankAccount
        onUpdateFormStep={nextStep}
        onRequestClose={handleRequestModal}
      />
    ),
    1: (
      <ModalCreditCard
        onUpdateFormStep={nextStep}
        onPreviousFormStep={previousStep}
        onRequestClose={handleRequestModal}
      />
    ),
    2: (
      <FinishedPage
        onPreviousFormStep={previousStep}
        onRequestClose={handleRequestModal}
      />
    ),
  };

  const Component = stepsMapping[step];

  const [error, setError] = useState(false);

  function onError() {
    setError(true);
  }

  if (error) return <Error />;

  return (
    <>
      <title>Gerenciamento de plano - Clube Quantum</title>
      <HeaderAuth />
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
            {showModal ? Component : null}
          </Plans>
        )}
      </S.Main>
      <Footer />
    </>
  );
}
