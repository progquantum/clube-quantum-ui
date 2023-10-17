import Image from 'next/legacy/image';
import Link from 'next/link';

import { Footer } from 'components/Footer';

import * as S from './styles';

export function BancoUmAdvantagesPage() {
  return (
    <>
      <S.Container>
        <S.LeftWrapper>
          <h2>Vantagens em ser Cliente Banco Um</h2>
          <S.Box>
            <ul>
              <li>POS</li>
              <li>Melhores taxas</li>
              <li>Conta 100% Digital</li>
              <li>Segurança e rapidez</li>
              <li>Cartão de Crédito e Débito</li>
              <li>Vantagens exclusivas Clube Quantum</li>
            </ul>
          </S.Box>
        </S.LeftWrapper>

        <S.RightWrapper>
          <Image width={71} height={44} src="/images/banco-um-logo.svg" />
          <Image width={275} height={129} src="/images/iframe-video.svg" />
          <p>Baixe o aplicativo e crie sua conta</p>
          <S.Badges>
            <Link href="/">
              <Image width={74} height={24} src="/images/ios-store-badge.svg" />
            </Link>
            <Link href="/">
              <Image
                width={74}
                height={24}
                src="/images/google-play-badge.svg"
              />
            </Link>
          </S.Badges>
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
