import Image from 'next/legacy/image';
import Link from 'next/link';

import { ReactNode } from 'react';

import * as S from './styles';

export function Header({ children }: { children?: ReactNode | ReactNode[] }) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoContainer>
          <Link href="/">
            <Image
              src="/images/quantum-logo.svg"
              width={60}
              height={60}
              alt=""
            />
          </Link>
        </S.LogoContainer>
        {children}
      </S.Wrapper>
    </S.Container>
  );
}
