import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useShowSideBar } from 'hooks/useShowSideBar'

import { Footer } from 'components/Footer'

import { Header } from './Header'
import { SideBar } from './SideBar'

import * as S from './styles'

export function HomePage () {
  const sidebarIsVisible = useShowSideBar()

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

      {!sidebarIsVisible ? <Header /> : <SideBar />}

      <S.Container>
        <S.CashBackWrapper>
          <S.CashBackContent>
            <h1>Ganhe cashback todo dia!</h1>
            <h6>Seja um membro Clube Quantum</h6>
            <S.CashBackButton>
              <Link href='/signup' passHref>
                Criar minha conta
              </Link>
            </S.CashBackButton>
          </S.CashBackContent>

          <Image
            width={534}
            height={477}
            src='/images/cashback.svg'
            alt='Ilustração do CashBask'
          />
        </S.CashBackWrapper>

        <S.ArrowDownWrapper>
          <Image
            src='/images/arrow-down.svg'
            width={42}
            height={23}
            onClick={handleScroll}
          />
        </S.ArrowDownWrapper>

        <S.Wrapper>
          <S.Content>
            <Image
              width={510}
              height={650}
              src='/images/girl-on-mobile.jpg'
            />

            <S.TextContent>
              <h1>E não é só todo dia! É toda hora!</h1>
              <h6>Se você já possui uma conta Banco Um, tudo o que você precisa fazer é o pré cadastro!</h6>

              <h1>Não fique de fora</h1>
              <h6>Sendo um membro do clube quantum você só tem a ganhar!</h6>
            </S.TextContent>
          </S.Content>
        </S.Wrapper>

        <S.Wrapper>
          <S.Content className='second-content'>
            <Image
              width={510}
              height={650}
              src='/images/man-on-a-train.jpg'
            />

            <S.TextContent>
              <h1>E não é só todo dia! É toda hora!</h1>
              <h6>Se você já possui uma conta Banco Um, tudo o que você precisa fazer é o pré cadastro!</h6>

              <h1>Não fique de fora</h1>
              <h6>Sendo um membro do clube quantum você só tem a ganhar!</h6>
            </S.TextContent>
          </S.Content>
        </S.Wrapper>

        <S.FaqWrapper>
          <div>
            <S.FaqContent>
              <h1>F.A.Q</h1>

              <S.Box>
                <h2>O que é o Clube Quantum?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci tenetur eaque repellendus. Dolorum ullam error
                  est, necessitatibus dolorem qui quam commodi corrupti atque
                  nulla aliquid quae, porro cum, minima id?
                </p>
              </S.Box>

              <S.Box>
                <h2>O que é o Clube Quantum?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci tenetur eaque repellendus. Dolorum ullam error
                  est, necessitatibus dolorem qui quam commodi corrupti atque
                  nulla aliquid quae, porro cum, minima id?
                </p>
              </S.Box>
            </S.FaqContent>

            <Image
              width={587}
              height={447}
              src='/images/questions.svg'
            />
          </div>
        </S.FaqWrapper>
      </S.Container>

      <Footer />
    </>
  )
}
