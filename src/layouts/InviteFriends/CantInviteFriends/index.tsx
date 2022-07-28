import Image from 'next/image'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import * as S from './styles'

export function CantInviteFriends () {
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrap>
          <S.Heading>Oops, você ainda não pode convidar amigos!</S.Heading>
          <S.Content>
            Conheça os planos disponíveis no Clube Quantum, e clique abaixo para acessar e começar usufruir dos benefícios.
          </S.Content>

          <S.ButtonPlan>
            <S.HeadingInfo>
              Conheça os planos disponíveis no clube quantum, e clique abaixo para acessar e começar usufruir dos benefícios.
            </S.HeadingInfo>
            <S.InfoButton>Comece agora</S.InfoButton>
          </S.ButtonPlan>
        </S.Wrap>
        <S.ImageDiv>
          <Image className='image' width={385} height={467} src='/images/friends-error.svg' alt='' />
        </S.ImageDiv>
      </S.Container>
      <Footer />
    </>
  )
}
