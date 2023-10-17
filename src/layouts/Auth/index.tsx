import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

import { HOMEPAGE_PAGE } from 'constants/routesPath';

import { AuthLayoutProps } from './types';
import * as S from './styles';

export function AuthLayout({
  title,
  children,
  description,
  backgroundImage,
  backgroundPosition = 'left',
}: PropsWithChildren<AuthLayoutProps>) {
  return (
    <S.Container backgroundPosition={backgroundPosition}>
      <S.Background
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <S.Content>
        <Link href={HOMEPAGE_PAGE} legacyBehavior>
          <a>
            <Image
              src="/images/quantum-logo.svg"
              width={120}
              height={120}
              aria-label="Clube Quantum"
              alt="Clube Quantum"
              title="Login"
            />
          </a>
        </Link>

        <h1 className="title">{title}</h1>

        {description && <p className="description">{description}</p>}

        {children}
      </S.Content>
    </S.Container>
  );
}
