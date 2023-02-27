import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { STORE_DETAILS_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function ServiceCard({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Link href={STORE_DETAILS_PAGE}>{children}</Link>
    </S.Container>
  );
}
