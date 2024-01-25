import { BiSearchAlt } from 'react-icons/bi';
import { useRef } from 'react';

import { InputSearchProps } from './types';
import * as S from './styles';

export function InputSearch({
  name,
  placeholder,
  onRequestClick,
  variant = 'default',
  ...rest
}: InputSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') {
      onRequestClick();
    }
  };
  return (
    <S.ContainerInput variant={variant}>
      <S.InputSearch
        id={name}
        ref={inputRef}
        placeholder={placeholder || ''}
        onKeyDown={e => onRequestClick && handleKeyDown(e.key)}
        {...rest}
      />
      <S.ContainerIcon onClick={onRequestClick}>
        <BiSearchAlt size={25} />
      </S.ContainerIcon>
    </S.ContainerInput>
  );
}
