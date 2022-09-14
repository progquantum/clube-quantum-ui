import Head from 'next/head'
import Image from 'next/image'

import { SIGN_UP_PAGE } from 'constants/routesPath'

import { Footer } from 'components/Footer'

import { Header } from './Header'

import * as S from './styles'

export function HomePage () {
  const handleScroll = () => {
    window.scroll({
      top: 650,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Head>
        <title>Clube Quantum</title>
      </Head>
      <Header />
      <S.Background>
        <S.Container>

          <S.CashBackContainer>
            <div>
              <S.CashBackTitle>
                Ganhe cash back todo dia!
              </S.CashBackTitle>
              <S.CashBackText>
                Seja um membro Clube Quantum
              </S.CashBackText>
              <S.HomePageButton
                as='a'
                href={SIGN_UP_PAGE}
              >
                Criar minha conta
              </S.HomePageButton>
            </div>
            <Image
              width={480}
              height={400}
              src='/images/cashback.svg'
              alt=''
            />
          </S.CashBackContainer>

          <S.ArrowDownWrapper>
            <Image
              src='/images/arrow-down.svg'
              width={42}
              height={23}
              onClick={handleScroll}
            />
          </S.ArrowDownWrapper>

          <S.Wrapper>

            <S.ImageWrapper
              width={439}
              height={480}
              src='/images/girl-on-phone.jpg'
              alt=''
            />

            <S.WrapperContent>
              <S.ContentTitle>E não é só todo dia!<br />É toda hora!</S.ContentTitle>
              <S.ContentText>Se você já possui uma conta Banco Um, tudo o que você precisa fazer é o pré cadastro!</S.ContentText>
              <S.ContentTitleLeft>Não fique de fora</S.ContentTitleLeft>
              <S.ContentTextLeft>Sendo um membro do clube quantum você só tem a ganhar!</S.ContentTextLeft>
            </S.WrapperContent>
          </S.Wrapper>
          <S.WrapperLeft>
            <S.ImageWrapper
              src='/images/girl-on-phone-2.jpg'
              width={439}
              height={480}
              alt=''
            />
            <S.WrapperContent>
              <S.ContentTitle>Não tem segredo!</S.ContentTitle>
              <S.ContentText>Se você já possui uma conta Banco Um, tudo o que você precisa fazer é o pré cadastro!</S.ContentText>
            </S.WrapperContent>

          </S.WrapperLeft>

          <S.Line />

          <S.FaqContainer>
            <h2>F.A.Q.</h2>
            <S.FaqBox>
              <S.FaqContent>
                <S.Faq>
                  <h3>O que é o Clube Quantum?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </S.Faq>
                <S.Faq>
                  <h3>Como indicar amigos?</h3>
                  <p>Basta acessar a home do app &gt; Indique Amigos &gt; Indicar Amigos, selecionar um canal para compartilhamento e pronto! Além do link direto você também poderá ver o seu código de indicação.

                    Ah, e você também pode copiar e colar o link com o seu código de indicação nas suas redes sociais.
                  </p>
                </S.Faq>
                <S.HomePageButton>Veja mais dúvidas</S.HomePageButton>
              </S.FaqContent>
              <S.FaqImage>
                <Image
                  src='/images/questions.svg'
                  width={480}
                  height={336}
                />
              </S.FaqImage>
            </S.FaqBox>
          </S.FaqContainer>
        </S.Container>

      </S.Background>

      <Footer />
    </>
  )
}
