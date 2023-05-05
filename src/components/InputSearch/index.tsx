import { BiSearchAlt } from 'react-icons/bi';

import { useTheme } from 'styled-components';

import * as S from './styles';
import { InputSearchProps } from './types';

export function InputSearch({ placeholder }: InputSearchProps) {
  const { colors } = useTheme();
  return (
    <S.ContainerInput>
      <S.InputSearch placeholder={placeholder || ''} />
      <S.ContainerIcon>
        <BiSearchAlt size={25} color={colors.background} />
      </S.ContainerIcon>
    </S.ContainerInput>
  );
}
