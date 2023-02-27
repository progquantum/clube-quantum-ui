import { ReactNode } from 'react';

import * as S from './styles';

export function FieldInfo({ children }: { children?: ReactNode }) {
  return <S.FieldInfo>{children}</S.FieldInfo>;
}
