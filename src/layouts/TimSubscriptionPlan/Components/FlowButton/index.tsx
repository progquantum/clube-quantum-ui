import { PropsWithChildren } from 'react';

import * as S from './styles';
import { ButtonFCProps } from './types';

export function FlowButton({
  variant,
  onClick,
  children,
}: PropsWithChildren<ButtonFCProps>) {
  return (
    <S.Button variant={variant} onClick={onClick}>
      {children}
    </S.Button>
  );
}
