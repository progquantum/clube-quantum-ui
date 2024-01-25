import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function SuccessToast() {
  const { colors } = useTheme();

  return (
    <S.Container>
      <IoMdCheckmarkCircleOutline size={30} color={colors.successLight} />
      <div>
        <S.Title>Sucesso</S.Title>
        <span>Você foi adicionado a lista de espera com sucesso!</span>
      </div>
    </S.Container>
  );
}
