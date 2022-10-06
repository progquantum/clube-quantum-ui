/* eslint-disable react/jsx-no-bind */
import Modal from 'react-modal';
import { useState } from 'react';

import { ManagePlans } from 'components/ManagePlans';
import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { SideBar } from 'components/SideBar';
import { Successful } from 'components/Successful';
import { Plans } from 'components/Plans';
import { useAuthState } from 'contexts/auth/AuthContext';

import { SelectPlan } from './SelectPlan';
import { ModalCVC } from './ModalCVC';
import * as S from './styles';
import { SubscriptionButton } from './SubscriptionButton';
import { ManagePlansButton } from './ManagePlansButton';

export function SubscriptionsPage() {
  const { user } = useAuthState();
  const hasPlan = user.subscription?.is_active;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  function onError() {
    setError(true);
  }

  function onSuccessful() {
    setSuccessful(true);
  }
  return (
    <>
      <title>Gerenciamento de plano - Clube Quantum</title>
      <Header />
      <S.Main>
        {!error ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {!successful ? (
              <>
                <SideBar />
                {hasPlan ? (
                  <Plans
                    button={
                      <SubscriptionButton onOpenModalCvcRequest={openModal} />
                    }
                  >
                    <SelectPlan />
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      overlayClassName="react-modal-overlay"
                      className="react-modal-container"
                    >
                      <ModalCVC
                        onSucessful={onSuccessful}
                        onError={onError}
                        onClose={closeModal}
                      />
                    </Modal>
                  </Plans>
                ) : (
                  <Plans button={<ManagePlansButton />}>
                    <ManagePlans width="370" />
                  </Plans>
                )}
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
