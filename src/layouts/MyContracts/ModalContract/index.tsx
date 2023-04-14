import { MdAssignmentInd } from 'react-icons/md';

import { FaShoppingBag } from 'react-icons/fa';

import { Modal } from 'components/Modal';

import { colors } from 'styles/theme/colors';

import { Button } from 'components/Button';

import { useGetLoggedUser } from 'hooks/useGetLoggedUser';

import { formatDate } from 'utils/formatters/formatDate';

import { Props } from './types';
import * as S from './styles';

export function ModalContract({
  onRequestClose,
  onRequestModalCancel,
  contract,
}: Props) {
  const { data: loggedUser } = useGetLoggedUser();

  const handleOpenModalCancel = () => {
    onRequestClose();
    onRequestModalCancel();
  };
  return (
    <Modal onClose={onRequestClose}>
      <S.Container>
        <S.Column>
          <S.Text>
            <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
            Informações pessoais
          </S.Text>
          <S.Title>Contrato TIM 10GB</S.Title>
          <S.Text>ID - 09S8G12</S.Text>
          <S.ContentRow>
            <S.TextStrong>Nome</S.TextStrong>
            <S.TextData>{loggedUser.name}</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Data de Nasc.</S.TextStrong>
            <S.TextData>{formatDate(loggedUser.birth_date)}</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>E-mail</S.TextStrong>
            <S.TextData>{loggedUser.email}</S.TextData>
          </S.ContentRow>
        </S.Column>
        <S.Column>
          <S.Text>
            <FaShoppingBag size={19.87} color={colors.mediumslateBlue} />
            Informações de produto contratado
          </S.Text>
          <S.ContentRow>
            <S.TextStrong>Produto</S.TextStrong>
            <S.TextData>Plano TIM 10GB</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Número do telefone</S.TextStrong>
            <S.TextData>9 9921 8371</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>DDD</S.TextStrong>
            <S.TextData>44</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Valor da mensalidade</S.TextStrong>
            <S.TextData>R$ 44,90</S.TextData>
          </S.ContentRow>
          <S.ContentRow>
            <S.TextStrong>Data da aquisição</S.TextStrong>
            <S.TextData>19/08/2023</S.TextData>
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
