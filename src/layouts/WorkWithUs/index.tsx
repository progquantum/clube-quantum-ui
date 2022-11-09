import Head from 'next/head';

import Image from 'next/image';

import Link from 'next/link';

import { Header } from 'layouts/Home/Header';
import { Footer } from 'components/Footer';
import { Button } from 'components/Button';

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
        <S.ContentWrapper>
          <S.Heading>
            Venha fazer parte do Quantum e dê um Up nos seus rendimentos!
          </S.Heading>
          <S.ContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </S.ContentText>
          <Link href={SIGN_UP_PAGE}>
            <Button>Fazer meu cadastro</Button>
          </Link>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Image src="/images/group.svg" width="400" height="350" />
        </S.ContentWrapper>
      </S.Container>

      <Footer />
    </>
  );
}
