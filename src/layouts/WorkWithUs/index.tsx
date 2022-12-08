import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Header } from 'layouts/Home/Header';
import { Footer } from 'components/Footer';
import { Button } from 'components/Button';

import { ToolTipContact } from 'components/ToolTipContact';

import { SIGN_UP_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function WorkWithUsPage() {
  return (
    <>
      <Head>
        <title>Trabalhe conosco</title>
      </Head>
      <Header />
      <S.Container>
        <ToolTipContact />
        <S.ContentWrapper>
          <S.Heading>
            Venha fazer parte do Quantum e dê um Up nos seus rendimentos!
          </S.Heading>
          <S.ContentText>Em breve...</S.ContentText>
          <Link href={SIGN_UP_PAGE}>
            <Button variant="disabled" disabled>
              Em breve
            </Button>
          </Link>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Image src="/images/group.svg" width="450" height="400" />
        </S.ContentWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
