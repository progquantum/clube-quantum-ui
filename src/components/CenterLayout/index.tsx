import { PropsWithChildren } from 'react';

import * as S from './styles';

export function CenterLayout({ children }: PropsWithChildren) {
  return <S.CenterContainer>{children}</S.CenterContainer>;
}
