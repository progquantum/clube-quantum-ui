import { PropsWithChildren } from 'react';

import * as S from './styles';

export function SectionTitle({ children }: PropsWithChildren) {
  return <S.Title>{children}</S.Title>;
}
