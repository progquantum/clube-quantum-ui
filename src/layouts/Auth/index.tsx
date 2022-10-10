import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SIGN_IN_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { AuthLayoutProps } from './types';

export function AuthLayout({
  title,
  children,
  description,
  backgroundImage,
  backgroundPosition = 'left',
}: PropsWithChildren<AuthLayoutProps>) {
  return (
    <S.Container backgroundPosition={backgroundPosition}>
      <S.Background backgroundImage={backgroundImage} />

      <S.Content>
        <Link href={SIGN_IN_PAGE}>
          <S.ContainerImage>
            <Image
              src="/images/quantum-logo.svg"
              width={120}
              height={120}
              aria-label="Clube Quantum"
              alt="Clube Quantum"
              title="Login"
            />
          </S.ContainerImage>
        </Link>

        <h1 className="title">{title}</h1>

        {description && <p className="description">{description}</p>}

        {children}
      </S.Content>
    </S.Container>
  );
}
