import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { FREQUENT_QUESTIONS_PAGE, SIGN_UP_PAGE } from 'constants/routesPath';
import { Footer } from 'components/Footer';

import { ToolTipContact } from 'components/ToolTipContact';

import { HeaderGuest } from 'components/Header/HeaderGuest';

import * as S from './styles';

export function HomePage() {
  const handleScroll = () => {
    window.scroll({
      top: 650,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Head>
        <title>Clube Quantum</title>
      </Head>
      <HeaderGuest />
      <S.Background>
        <ToolTipContact />
        <S.Container>
          <S.CashBackContainer>
            <div>
              <S.CashBackTitle>Ganhe cash back todo dia!</S.CashBackTitle>
              <S.CashBackText>Seja um membro Clube Quantum</S.CashBackText>
              <Link href={SIGN_UP_PAGE}>
                <S.HomePageButton>Criar minha conta</S.HomePageButton>
              </Link>
            </div>
            <Image width={480} height={400} src="/images/cashback.svg" alt="" />
          </S.CashBackContainer>

          <S.ArrowDownWrapper>
            <Image
              src="/images/arrow-down.svg"
              width={42}
              height={23}
              onClick={handleScroll}
            />
          </S.ArrowDownWrapper>

          <S.Wrapper>
            <S.ImageWrapper
              width={439}
              height={480}
              src="/images/girl-on-phone.jpg"
              alt=""
            />

            <S.WrapperContent>
              <S.ContentTitle>
                E não é só todo dia!
                <br />É toda hora!
              </S.ContentTitle>
              <S.ContentText>
                Se você já possui uma conta Banco Um, tudo o que você precisa
                fazer é o pré cadastro!
              </S.ContentText>
              <S.ContentTitleLeft>Não fique de fora</S.ContentTitleLeft>
              <S.ContentTextLeft>
                Sendo um membro do clube quantum você só tem a ganhar!
              </S.ContentTextLeft>
            </S.WrapperContent>
          </S.Wrapper>
          <S.WrapperLeft>
            <S.ImageWrapper
              src="/images/girl-on-phone-2.jpg"
              width={439}
              height={480}
              alt=""
            />
            <S.WrapperContent>
              <S.ContentTitle>Não tem segredo!</S.ContentTitle>
              <S.ContentText>
                Se você já possui uma conta Banco Um, tudo o que você precisa
                fazer é o pré cadastro!
              </S.ContentText>
            </S.WrapperContent>
          </S.WrapperLeft>

          <S.Line />

          <S.FaqContainer>
            <h2>F.A.Q.</h2>
            <S.FaqBox>
              <S.FaqContent>
                <S.Faq>
                  <h3>O que é o Clube Quantum?</h3>
                  <p>
                    É o marketplace do <strong>BANCO UM</strong>, com
                    <strong> Programa de Fidelidade</strong> e{' '}
                    <strong>CashBack</strong> que tem tem como objetivo
                    fortalecer o mercado local aumentando o faturamento das
                    empresas e o poder de compra dos consumidores. Consumimos
                    conteúdo, produtos e serviços 24 horas por dia, por isso
                    somos criativos, pioneiros e ambiciosos para transformar a
                    experiência de consumo de nossos clientes.
                  </p>
                </S.Faq>
                <S.Faq>
                  <h3>Como indicar amigos?</h3>
                  <p>
                    Basta acessar o seu perfil no Clube QUANTUM
                    www.quantum.com.vc &gt; Convidar Amigos &gt; clicar no link
                    de compartilhamento e pronto! Além do link de
                    compartilhamento você também poderá ver o seu código de
                    indicação. Ah, e você também pode copiar e colar o seu
                    código de indicação nas suas redes sociais.
                  </p>
                </S.Faq>
                <S.ButtonFaq>
                  <Link href={FREQUENT_QUESTIONS_PAGE}>
                    <a>Veja mais dúvidas</a>
                  </Link>
                </S.ButtonFaq>
              </S.FaqContent>
              <S.FaqImage>
                <Image src="/images/questions.svg" width={480} height={400} />
              </S.FaqImage>
            </S.FaqBox>
          </S.FaqContainer>
        </S.Container>
      </S.Background>

      <Footer />
    </>
  );
}
