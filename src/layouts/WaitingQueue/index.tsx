import Image from 'next/image';
import { useWindowSize } from 'react-use';
import { BiCheck } from 'react-icons/bi';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

import { AxiosError } from 'axios';

import { Header } from 'components/Header';
import { CenterLayout } from 'components/CenterLayout';
import { Footer } from 'components/Footer';
import { HeaderAuth } from 'components/Header/HeaderAuth';
import { ShowOffers } from 'components/ShowOffers';
import { AccountCard } from 'components/AccountCard';
import { useMe } from 'hooks/me/useMe';
import { PlanSectionTitle } from 'components/PlanSectionTitle';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { usePostCreditCardWaitingQueue } from 'hooks/useBancoUmCreditCard/usePostCreditCardWaitingQueue';
import { MARKETPLACE_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { SuccessToast } from './SuccessToast';

export function WaitingQueuePage() {
  const { push } = useRouter();
  const { mutate: postRequest, isLoading } = usePostCreditCardWaitingQueue();
  const [warningModalStatus, setWarningModalStatus] = useState(false);

  const toggleWarningModalStatus = () =>
    setWarningModalStatus(prevState => !prevState);

  const { colors } = useTheme();
  const { width } = useWindowSize();

  const handleWaitingQueue = () => {
    postRequest(null, {
      onSuccess: () => {
        toast.custom(<SuccessToast />, {
          duration: 1500,
          position: 'bottom-center',
        });
      },
      onError: (err: unknown) => {
        if (err instanceof AxiosError) {
          if (
            err.response.data.message === 'User does not have a subscription' ||
            err.response.data.message ===
              'You need to be ACTIVE on a Start or Select plan'
          ) {
            toggleWarningModalStatus();
          }
        }
      },
    });
  };

  const isMobile = width <= 780;

  return (
    <>
      {warningModalStatus && (
        <Modal onClose={toggleWarningModalStatus} noDragBehavior maxWidth={500}>
          <S.ModalContentContainer>
            <span>
              Você precisa estar <strong>ATIVO</strong> em um plano{' '}
              <strong>START</strong> ou <strong>SELECT</strong>.
            </span>
            <Button
              onClick={toggleWarningModalStatus}
              style={{ maxWidth: '150px', maxHeight: '45px' }}
            >
              Entendi
            </Button>
          </S.ModalContentContainer>
        </Modal>
      )}
      {isMobile ? (
        <HeaderAuth />
      ) : (
        <Header>
          <ShowOffers />
          <AccountCard />
        </Header>
      )}

      <S.HeroContainer>
        <Image
          src="/images/banner-waiting-queue.svg"
          fill
          alt="Imagem de um cartão de crédito"
        />
      </S.HeroContainer>
      <CenterLayout>
        <PlanSectionTitle variant="darkBlue">
          Faça parte você também!
        </PlanSectionTitle>
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
        >
          <S.Card>
            <S.Title>Cartão de Crédito</S.Title>
            <Image
              src="/images/banco-um-logo-preto.svg"
              width={170}
              height={108}
              alt="Logo do Banco Um"
            />
            <Image
              src="/images/visa-logo.svg"
              width={126}
              height={41}
              alt="Logo do Cartão Visa"
            />
            <S.UnorderedList>
              <S.ListItem>
                <BiCheck size={15} color={colors.mediumslateBlue} />
                <span>
                  Para se cadastrar na Lista de Espera, deverá estar{' '}
                  <strong>ATIVO</strong> nos planos <strong>START </strong>ou
                  <strong> SELECT</strong>
                </span>
              </S.ListItem>
              <S.ListItem>
                <BiCheck size={15} color={colors.mediumslateBlue} />
                <span>
                  Sujeito à analise de score de utilização do
                  <strong> Clube Quantum</strong>
                </span>
              </S.ListItem>
              <S.ListItem>
                <BiCheck size={15} color={colors.mediumslateBlue} />
                <span>
                  Ao Receber seu <strong>Cartão de Crédito</strong>, terá
                  anuidade com parcela mensal de R$9,90
                </span>
              </S.ListItem>
              <S.Label>Desejo me cadastrar na Lista de Espera</S.Label>
              <S.ButtonContainer>
                <Button onClick={handleWaitingQueue} loading={isLoading}>
                  Sim
                </Button>
                <Button
                  loading={isLoading}
                  onClick={() => push(MARKETPLACE_PAGE)}
                >
                  Não
                </Button>
              </S.ButtonContainer>
            </S.UnorderedList>
          </S.Card>
        </div>
      </CenterLayout>
      <Footer />
    </>
  );
}
