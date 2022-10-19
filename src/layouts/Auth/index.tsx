import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SIGN_IN_PAGE } from 'constants/routesPath';

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
        {/* Should wrap link component with element due to this
          issue of next/link https://github.com/vercel/next.js/issues/127 */}
        <Link href={SIGN_IN_PAGE}>
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
