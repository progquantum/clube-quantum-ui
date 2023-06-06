import Image from 'next/legacy/image';
import Link from 'next/link';

import { ReactNode, useEffect } from 'react';

import * as S from './styles';

export function Header({ children }: { children?: ReactNode | ReactNode[] }) {
  const isFirstChildrenMarketplaceLink = children[0].key === 'marketplaceLink';

  useEffect(() => {
    document.body.style.overflow = 'unset';
  }, [isFirstChildrenMarketplaceLink]);

  return (
    <S.Container>
      <S.Wrapper>
        {isFirstChildrenMarketplaceLink ? (
          <>
            <S.LogoContainer>
              <Link href="/">
                <Image
                  src="/images/quantum-logo.svg"
                  width={60}
                  height={60}
                  alt=""
                  quality={100}
                />
              </Link>
            </S.LogoContainer>
            {children[0]}
            {children[1]}
          </>
        ) : (
          <>
            {children[0]}
            <S.LogoContainer>
              <Link href="/">
                <Image
                  src="/images/quantum-logo.svg"
                  width={60}
                  height={60}
                  alt=""
                  quality={100}
                />
              </Link>
            </S.LogoContainer>
            {children[1]}
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
