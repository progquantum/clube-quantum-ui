import { PropsWithChildren } from 'react';

import * as S from './styles';
import { ButtonFCProps } from './types';

export function FlowButton({
  variant,
  onClick,
  children,
  ...rest
}: PropsWithChildren<ButtonFCProps>) {
  return (
    <S.Button variant={variant} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
}
