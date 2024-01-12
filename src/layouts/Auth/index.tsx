import Image from 'next/legacy/image';
import Link from 'next/link';
import { PropsWithChildren, useEffect, useState } from 'react';

import { HOMEPAGE_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { AuthLayoutProps } from './types';

export function AuthLayout({
  title,
  children,
  description,
  backgroundImage,
  backgroundPosition = 'left',
  bancoUm,
}: PropsWithChildren<AuthLayoutProps>) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpar o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const width = windowWidth > 1500 ? windowWidth / 2 : 720;
  return (
    <S.Container backgroundPosition={backgroundPosition}>
      <S.Background
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <S.Content windowWidth={width}>
        <Link href={HOMEPAGE_PAGE} legacyBehavior>
          <a>
            <Image
              src={
                bancoUm
                  ? '/images/banco_um_signup.png'
                  : '/images/quantum-logo.svg'
              }
              width={bancoUm ? 94 : 120}
              height={bancoUm ? 59 : 120}
              aria-label={bancoUm ? 'Banco Um' : 'Clube Quantum'}
              alt={bancoUm ? 'Banco Um' : 'Clube Quantum'}
              title={bancoUm ? 'Banco Um' : 'Clube Quantum'}
            />
          </a>
        </Link>

        <h1 className="title">{title}</h1>
        {bancoUm && <S.Title>BANCO UM FLEX MULTIBENEFÍCIO</S.Title>}

        {description && <p className="description">{description}</p>}

        <div
          style={{
            width: '100%',
            maxWidth: '720px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
          }}
        >
          {children}
        </div>
      </S.Content>
    </S.Container>
  );
}
