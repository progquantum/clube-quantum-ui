import Image from 'next/image';
import Link from 'next/link';

import { Footer } from 'components/Footer';

import { ADVANTAGES_PAGE, SIGN_UP_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function GuestPage() {
  return (
    <>
      <S.Container>
        <S.LeftWrapper>
          <h2>Você foi convidado para fazer parte do clube quantum.</h2>
          <h3>Falta apenas um passo, se você já possui conta no Banco Um</h3>
          <Link href={SIGN_UP_PAGE}>Criar minha conta</Link>
        </S.LeftWrapper>

        <S.RightWrapper>
          <Image width={71} height={44} src="/images/banco-um-logo.svg" />
          <h2>Ainda não é um cliente Banco Um?</h2>
          <h3>Conheça as vantagens de ser um cliente Banco Um</h3>
          <Link href={ADVANTAGES_PAGE}>Saiba mais</Link>
        </S.RightWrapper>
      </S.Container>

      <Footer />
    </>
  );
}
