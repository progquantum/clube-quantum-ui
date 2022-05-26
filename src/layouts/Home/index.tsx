import Head from 'next/head'
import NextLink from 'next/link'

import { Header } from './components/Header'

import * as S from './styles'

export function HomePage () {
  return (
    <>
      <Head>
        <title>Clube Quantum</title>
      </Head>

      <Header />

      <S.Container>
        <S.FirstSection>
          <div>
            <h1>
              Ganhe cash back <br /> todo dia!
            </h1>
            <h6>Seja um membro Clube Quantum</h6>
            <NextLink href='/register/personal'>
              <button> Criar minha conta</button>
            </NextLink>
          </div>
          <img src='/assets/cashback.svg' alt='Cashback' />
        </S.FirstSection>

        <div>
          <img src='/assets/arrow-down.svg' alt='Arrow down icon' />
        </div>

        <S.SecondSection>
          <img
            src='/assets/girl-on-mobile.png'
            alt='Girl on mobile'
          />
          <div>
            <div>
              <h1>
                E não é só todo dia! <br />É toda hora!
              </h1>
              <p>
                Se você já possui um conta Banco Um, tudo o que você precisa
                fazer é o pré cadastro!
              </p>
            </div>
            <div>
              <h1>Não fique de fora</h1>
              <p>
                Sendo um membro do clube quantum você só tem a ganhar!
              </p>
            </div>
          </div>
        </S.SecondSection>

        <S.ThirdSection>
          <div>
            <h1>Não tem segredo!</h1>
            <p>
              Se você já possui um conta Banco Um, tudo o que você precisa
              fazer é o pré cadastro!
            </p>
          </div>
          <img
            src='/assets/girl-taking-photo.png'
            alt='Girl taking photo'
          />
        </S.ThirdSection>

        <S.FaqContents>
          <h1>F.A.Q.</h1>
          <div>
            <div>
              <S.Box>
                <h3>O que é o Clube Quantum?</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, laborum? Praesentium expedita consequatur iste ipsa
                  ipsum quaerat est dolorem tempore magni dolore repudiandae
                  optio cumque consectetur sapiente ullam, culpa aut?
                </p>
              </S.Box>
              <S.Box>
                <h3>O que é o Clube Quantum?</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, laborum? Praesentium expedita consequatur iste ipsa
                  ipsum quaerat est dolorem tempore magni dolore repudiandae
                  optio cumque consectetur sapiente ullam, culpa aut?
                </p>
              </S.Box>
              <button>Veja mais Dúvidas</button>
            </div>
            <img src='/assets/questions.svg' alt='Questions' />
          </div>
        </S.FaqContents>
      </S.Container>
    </>
  )
}
