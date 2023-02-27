import { AiFillInfoCircle } from 'react-icons/ai';

import { colors } from 'styles/theme/colors';

import * as S from './styles';
import { Props } from './types';

export function ContractComponent({ onRequestModalContract }: Props) {
  return (
    <S.Container onClick={onRequestModalContract}>
      <S.Column>
        <S.Title>Contrato TIM 10GB</S.Title>
        <S.Text>ID - 09S8G12</S.Text>
        <S.Text>Data de aquisição</S.Text>
        <S.DueDate>19/08/2023</S.DueDate>
      </S.Column>
      <S.ContainerIcon>
        <AiFillInfoCircle size={20} color={colors.mediumslateBlue} />
      </S.ContainerIcon>
    </S.Container>
  );
}
