import { BiSearchAlt } from 'react-icons/bi';

import { useTheme } from 'styled-components';

import { useRef } from 'react';

import { InputSearchProps } from './types';
import * as S from './styles';

export function InputSearch({
  name,
  placeholder,
  onRequestClick,
  ...rest
}: InputSearchProps) {
  const { colors } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') {
      onRequestClick();
    }
  };
  return (
    <S.ContainerInput>
      <S.InputSearch
        id={name}
        ref={inputRef}
        placeholder={placeholder || ''}
        onKeyDown={e => handleKeyDown(e.key)}
        {...rest}
      />
      <S.ContainerIcon onClick={onRequestClick}>
        <BiSearchAlt size={25} color={colors.background} />
      </S.ContainerIcon>
    </S.ContainerInput>
  );
}
