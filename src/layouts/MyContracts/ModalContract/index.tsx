import { MdAssignmentInd } from 'react-icons/md';

import { FaShoppingBag } from 'react-icons/fa';

import { useGetLoggedUser } from 'hooks/me/useGetLoggedUser';

import { Modal } from 'components/Modal';

import { colors } from 'styles/theme/colors';

import { Button } from 'components/Button';

import { formatDate } from 'utils/formatters/formatDate';

import { useGetContractByKey } from 'hooks/useContracts/useGetContractByKey';

import { formatPrice } from 'utils/formatters/formatPrice';

import { Props } from './types';
import * as S from './styles';

export function ModalContract({
  onRequestClose,
  onRequestModalCancel,
  contract,
}: Props) {
  const { data: loggedUser } = useGetLoggedUser();
  const { data: contractDetailedInfo } = useGetContractByKey(
    contract.document_key,
  );

  const handleOpenModalCancel = () => {
    onRequestClose();
    onRequestModalCancel();
  };

  const isQuantumSmart = contract.plan_name.match(/quantum smart/i);

  return (
    <Modal onClose={onRequestClose}>
      <S.Container>
        <S.Column>
          <S.Text>
            <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
            Informações pessoais
          </S.Text>
          <S.Title>
            Contrato {contractDetailedInfo?.contract_information.plan_name}
          </S.Title>
          <S.Text>ID - {contract.id}</S.Text>
          <S.ContentRow>
            <S.TextStrong>Nome</S.TextStrong>
            <S.TextData>{loggedUser?.name}</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Data de Nasc.</S.TextStrong>
            <S.TextData>
              {loggedUser?.birth_date && formatDate(loggedUser?.birth_date)}
            </S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>E-mail</S.TextStrong>
            <S.TextData>{loggedUser?.email}</S.TextData>
          </S.ContentRow>
        </S.Column>
        <S.Column>
          <S.Text>
            <FaShoppingBag size={19.87} color={colors.mediumslateBlue} />
            Informações de produto contratado
          </S.Text>
          <S.ContentRow>
            <S.TextStrong>Produto</S.TextStrong>
            <S.TextData>
              Plano {contractDetailedInfo?.contract_information.plan_name}
            </S.TextData>
          </S.ContentRow>
          {!isQuantumSmart && (
            <>
              <S.ContentRow>
                <S.TextStrong>Número do telefone</S.TextStrong>
                <S.TextData>9 9921 8371</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>DDD</S.TextStrong>
                <S.TextData>44</S.TextData>
              </S.ContentRow>
            </>
          )}
          <S.ContentRow>
            <S.TextStrong>Valor da mensalidade</S.TextStrong>
            <S.TextData>
              {formatPrice(
                String(contractDetailedInfo?.contract_information.monthly_fee),
              )}
            </S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Data da aquisição</S.TextStrong>
            <S.TextData>
              {contractDetailedInfo?.contract_information.date_of_acquisition &&
                formatDate(
                  String(
                    contractDetailedInfo?.contract_information
                      .date_of_acquisition,
                  ),
                )}
            </S.TextData>
          </S.ContentRow>
        </S.Column>
        <Button style={{ marginTop: '0px', height: '50px' }}>
          Visualizar contrato
        </Button>
        <Button
          style={{ marginTop: '0px', height: '50px' }}
          variant="danger_outline"
          onClick={handleOpenModalCancel}
        >
          Solicitar cancelamento
        </Button>
        <Button
          style={{ marginTop: '0px', height: '50px' }}
          variant="secondary"
          onClick={onRequestClose}
        >
          Sair
        </Button>
      </S.Container>
    </Modal>
  );
}
