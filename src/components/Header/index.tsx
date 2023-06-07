import Image from 'next/legacy/image';
import Link from 'next/link';

import { ReactNode, useEffect } from 'react';

import { useWindowSize } from 'react-use';

import * as S from './styles';

export function Header({ children }: { children?: ReactNode | ReactNode[] }) {
  const { width } = useWindowSize();

  const isMobile = width <= 600;

  useEffect(() => {
    if (!isMobile) document.body.style.overflow = 'unset';
  }, [isMobile]);

  if (!Array.isArray(children)) {
    return (
      <S.Container>
        <S.Wrapper>
          {isMobile ? (
            <>
              {children}
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
              <div />
            </>
          ) : (
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
              {children}
            </>
          )}
        </S.Wrapper>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.Wrapper>
        {isMobile ? (
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
        ) : (
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
        )}
      </S.Wrapper>
    </S.Container>
  );
}
