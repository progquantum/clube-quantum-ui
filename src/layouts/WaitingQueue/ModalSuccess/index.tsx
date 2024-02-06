/* eslint-disable react/jsx-no-useless-fragment */
import Image from 'next/legacy/image';

import router from 'next/router';

import { Modal } from 'components/Modal';

import { Button } from 'components/Button';

import { MARKETPLACE_PAGE } from 'constants/routesPath';

import { useUserProfile } from 'hooks/me/useUserProfile';

import { ModalProps } from './types';

import * as S from './styles';

export function ModalSuccess({ onRequestClose, isOpen }: ModalProps) {
  const { data: user } = useUserProfile();
  const handleSuccessSendToMarketPlace = () => {
    onRequestClose();
    router.push(MARKETPLACE_PAGE);
  };

  return (
    <>
      {isOpen && (
        <Modal maxWidth={400} onClose={onRequestClose}>
          <S.Container>
            <Image
              width={94}
              height={94}
              src="/images/circle-check-linear.svg"
              alt=""
            />
            <S.Title>Tudo certo {user.name}!</S.Title>
            <S.Paragraph>
              Seu nome já está na nossa lista de espera. Você receberá no seu
              e-mail, nas próximas semanas, informações sobre o envio do seu
              Cartão de Crédito
            </S.Paragraph>
            <S.Text>
              Mantenha seu Plano Quantum sempre ATIVO para não perder esta
              oportunidade.
            </S.Text>
            <S.TextBlue>Seja bem vindo ao Clube Quantum e Banco UM</S.TextBlue>
            <Button onClick={handleSuccessSendToMarketPlace}>Ok</Button>
          </S.Container>
        </Modal>
      )}
    </>
  );
}
