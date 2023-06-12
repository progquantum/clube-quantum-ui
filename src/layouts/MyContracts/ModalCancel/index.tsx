import { ImCross } from 'react-icons/im';
import dayjs from 'dayjs';

import { useRef } from 'react';
import { Form } from '@unform/web';

import { FormHandles, SubmitHandler } from '@unform/core';

import { useQueryClient } from 'react-query';

import { Modal } from 'components/Modal';

import { colors } from 'styles/theme/colors';

import { Button } from 'components/Button';

import { TextArea } from 'components/TextArea';

import { useGetContractByKey } from 'hooks/useContracts/useGetContractByKey';

import { usePostPlanCancellation } from 'hooks/useContracts/useRequestPlanCancellation';

import { error } from 'helpers/notify/error';

import { QUERY_KEY_GET_CONTRACTS_LOGGED_USER } from 'hooks/useContracts/useFindContractByUserId';

import { Props } from './types';
import * as S from './styles';

export function ModalCancel({ onRequestClose, contract }: Props) {
  const formRef = useRef<FormHandles>(null);
  const queryClient = useQueryClient();

  const { data: contractDetailedInfo } = useGetContractByKey(
    contract.document_key,
  );

  const { mutate: requestPlanCancellation, isLoading } =
    usePostPlanCancellation();

  const handleSendMessage: SubmitHandler = data => {
    const requestBody = {
      document_key: contract.document_key,
      justification: data.message,
    };

    requestPlanCancellation(requestBody, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY_GET_CONTRACTS_LOGGED_USER],
        });
        onRequestClose();
      },
      onError: () => {
        error('Algo deu errado');
      },
    });
  };

  console.log(contract);
  return (
    <Modal data-cy="modalCancel" onClose={onRequestClose}>
      <S.Container
        as={Form}
        ref={formRef}
        id="cancel-form"
        onSubmit={handleSendMessage}
      >
        <S.Text>
          <ImCross size={16} color={colors.danger} />
          Cancelamento de contrato
        </S.Text>
        <div style={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
          <S.Title>
            Contrato {contractDetailedInfo?.contract_information.plan_name}
          </S.Title>
          <S.Text>ID - {contract.id}</S.Text>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <S.ContentRow>
            <S.TextStrong>Nome</S.TextStrong>
            <S.TextData>
              {' '}
              {contractDetailedInfo?.personal_information.name}
            </S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Data de Nasc.</S.TextStrong>
            <S.TextData>
              {dayjs(contractDetailedInfo?.personal_information.birth_date)
                .add(1, 'day')
                .format('DD/MM/YYYY')}
            </S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>E-mail</S.TextStrong>
            <S.TextData>
              {contractDetailedInfo?.personal_information.email}
            </S.TextData>
          </S.ContentRow>
        </div>

        <S.Question>Deseja realmente cancelar seu contrato?</S.Question>
        <S.P>
          Mas antes de continuar, gostaríamos de saber o motivo pelo qual quer
          cancelar este contrato.
        </S.P>
        <div>
          <S.Label>Justificativa</S.Label>
          <TextArea
            data-cy="justificationTextArea"
            name="message"
            placeholder="Digite a sua justificativa"
            id="message"
          />
        </div>

        <div>
          <Button
            data-cy="requestCancellationButton"
            loading={isLoading}
            type="submit"
            style={{ marginTop: '0px', height: '50px' }}
            variant="danger_outline"
          >
            Solicitar cancelamento
          </Button>
          <Button
            style={{ marginTop: '12px', height: '50px' }}
            variant={isLoading ? 'disabled' : 'secondary'}
            onClick={onRequestClose}
          >
            Sair
          </Button>
        </div>
      </S.Container>
    </Modal>
  );
}
