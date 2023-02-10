import { PropsWithChildren } from 'react';

import * as S from './styles';

export function ServiceCard({ children }: PropsWithChildren) {
  return <S.Container>{children}</S.Container>;
}
