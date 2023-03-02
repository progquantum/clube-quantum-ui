import { ImCross } from 'react-icons/im';

import { useRef } from 'react';
import { Form } from '@unform/web';

import { FormHandles, SubmitHandler } from '@unform/core';

import { Modal } from 'components/Modal';

import { colors } from 'styles/theme/colors';

import { Button } from 'components/Button';

import { TextArea } from 'components/TextArea';

import { Props } from './types';
import * as S from './styles';

export function ModalCancel({ onRequestClose }: Props) {
  const formRef = useRef<FormHandles>(null);

  const handleSendMessage: SubmitHandler = data => data;
  return (
    <Modal onClose={onRequestClose}>
      <S.Container as={Form} ref={formRef} onSubmit={handleSendMessage}>
        <S.Text>
          <ImCross size={16} color={colors.danger} />
          Cancelamento de contrato
        </S.Text>
        <div style={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
          <S.Title>Contrato TIM 10GB</S.Title>
          <S.Text>ID - 09S8G12</S.Text>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <S.ContentRow>
            <S.TextStrong>Nome</S.TextStrong>
            <S.TextData>Rafael Gael Caio Teixeira</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Data de Nasc.</S.TextStrong>
            <S.TextData>06/07/1981</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>E-mail</S.TextStrong>
            <S.TextData>rafaelgaelteixeira@maptec.com.br</S.TextData>
          </S.ContentRow>
        </div>

        <S.Question>Deseja realmente cancelar seu contrato?</S.Question>
        <S.P>
          Mas antes de continuar, gostaríamos de saber o motivo pelo qual quer
          cancelar este contrato.
        </S.P>
        <div>
          {' '}
          <S.Label>Justificativa</S.Label>
          <TextArea
            name="message"
            placeholder="Digite a sua justificativa"
            id="message"
          />
        </div>

        <div>
          <Button
            style={{ marginTop: '0px', height: '50px' }}
            variant="danger_outline"
          >
            Solicitar cancelamento
          </Button>
          <Button
            style={{ marginTop: '12px', height: '50px' }}
            variant="secondary"
            onClick={onRequestClose}
          >
            Sair
          </Button>
        </div>
      </S.Container>
    </Modal>
  );
}
