import { PropsWithChildren } from 'react';

import * as S from './styles';

export function PlanSectionTitle({
  children,
  variant,
}: PropsWithChildren<{ variant?: 'error' | 'darkBlue' }>) {
  return <S.TitleContainer variant={variant}>{children}</S.TitleContainer>;
}
