import Image from 'next/image'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import { useFindMe } from 'hooks/useFindMe'
import { useShare } from 'hooks/useShare'

import { Skeleton } from './Skeleton'
import * as S from './styles'

export function InviteFriendsPage () {
  const { data, isLoading } = useFindMe()

  const linkCode = `http://localhost:3000/signup?invite=${data?.invite_code}`

  const hasInviteCode = data?.invite_code

  const share = useShare()

  const handleShare = () => {
    share({
      text: 'Seja um membro Clube Quantum!',
      title: 'Cadastra-se a partir do link de convite abaixo.',
      url: linkCode
    })
  }

  if (isLoading) return <Skeleton />

  return (
    <>
      <title>Convidar Amigos</title>

      <Header />
      <S.Container>
        {hasInviteCode
          ? (
            <>
              <div>
                <S.Heading>Nós damos valor <br />às amizades</S.Heading>

                <S.Content>
                  E recompensamos você, para cada Amigo convidado que se cadastrar no Clube Quantum.
                </S.Content>

                <S.InviteCodeContainer variant='transparent' onClick={handleShare}>
                  <p>
                    Seu link de convite é:
                    <br />
                    <strong>{linkCode}</strong>
                  </p>
                </S.InviteCodeContainer>
              </div>

              <S.ImageDiv>
                <Image
                  width={385}
                  height={467}
                  src='/images/friends.svg'
                  alt=''
                />
              </S.ImageDiv>
            </>
            )
          : (
            <>
              <S.ContainerWrapper>
                <S.Heading>Oops, você ainda não pode convidar amigos!</S.Heading>

                <S.Text>
                  Para convidar seus amigos e experimentar os benefícios quantum, você precisa estar inserido em um plano!
                </S.Text>

                <S.ButtonPlan>
                  <S.HeadingInfo>
                    Conheça os planos disponíveis no clube quantum, e clique abaixo para acessar e começar usufruir dos benefícios.
                  </S.HeadingInfo>

                  <S.InfoButton>
                    Aderir a um plano
                  </S.InfoButton>
                </S.ButtonPlan>
              </S.ContainerWrapper>

              <S.ImageDiv>
                <Image
                  width={385}
                  height={467}
                  src='/images/friends-error.svg'
                  alt=''
                />
              </S.ImageDiv>
            </>
            )}
      </S.Container>
      <Footer />
    </>
  )
}
