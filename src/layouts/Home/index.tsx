import Head from 'next/head'
import Image from 'next/image'

import { Button } from 'components/Button'

import { Header } from './Header'

import * as S from './styles'

export function HomePage () {
  return (
    <>
      <Head>
        <title>Clube Quantum</title>
      </Head>

      <Header />

      <S.Container>
        <S.CashBack>
          <S.CashBackWrap>
            <S.CashBackContent>
              <h1 className='heading title'>
                Ganhe cash back todo dia!
              </h1>

              <h6 className='heading description'>Seja um membro Clube Quantum</h6>

              <Button>
                Criar minha conta
              </Button>

            </S.CashBackContent>

            <Image
              src='/images/cashback.svg'
              alt='Ilustração do CashBack' width={618}
              height={533}
              objectFit='contain'
            />
          </S.CashBackWrap>

          <Image
            src='/images/arrow-down.svg'
            width={42}
            height={23}
            objectFit='contain'
          />
        </S.CashBack>

        <S.SecondSection>
          <img
            src='/images/girl-on-mobile.png'
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
            src='/images/girl-taking-photo.png'
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

              <Button>Veja mais Dúvidas</Button>
            </div>

            <img src='/images/questions.svg' alt='Questions' />
          </div>
        </S.FaqContents>
      </S.Container>
    </>
  )
}
