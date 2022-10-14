import { ButtonHTMLAttributes } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import * as S from './styles';

export function CloseModal({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <S.CloseModal title="Fechar modal" {...rest}>
      <RiCloseLine size={24} />
    </S.CloseModal>
  );
}
