import Image from 'next/image'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { useShare } from 'hooks/useShare'
import { useHasMounted } from 'hooks/useHasMounted'
import { useAuthState } from 'contexts/auth/AuthContext'

import { Skeleton } from './Skeleton'
import * as S from './styles'

export function InviteFriendsPage () {
  const { user } = useAuthState()
  const { hasMounted } = useHasMounted()

  const share = useShare()
  const linkCode = `http://localhost:3000/signup?invite=${user?.invite_code}`
  const hasInviteCode = user?.invite_code

  const handleShare = () => {
    share({
      text: 'Seja um membro Clube Quantum!',
      title: 'Cadastra-se a partir do link de convite abaixo.',
      url: linkCode
    })
  }

  const isLoading = !hasMounted

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
                <S.Heading>Nós damos valor às amizades</S.Heading>

                <S.Content>
                  E recompensamos você, para cada Amigo convidado que se cadastrar no Clube Quantum.
                </S.Content>

                <S.LinkButton variant='secondary' onClick={handleShare}>
                  Seu link de convite é:
                  <S.InviteCode>{linkCode}</S.InviteCode>
                </S.LinkButton>

                <S.ContainerLinks>
                  <S.InviteButton>
                    <S.Instagram />
                    Convidar via Instagram
                  </S.InviteButton>

                  <S.InviteButton>
                    <S.Facebook />
                    Convidar via Facebook
                  </S.InviteButton>

                  <S.InviteButton>
                    <S.WhatsApp />
                    Convidar via WhatsApp
                  </S.InviteButton>

                  <S.InviteButton>
                    <S.Mail />
                    Convidar via E-Mail
                  </S.InviteButton>

                  <S.InviteButton onClick={handleShare}>
                    <S.Link />
                    Copiar o link do convite
                  </S.InviteButton>
                </S.ContainerLinks>
              </div>

              <S.ImageDiv>
                <Image className='image' width={385} height={467} src='/images/friends.svg' alt='' />
              </S.ImageDiv>
            </>
            )
          : (
            <>
              <div>
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
              </div>

              <S.ImageDiv>
                <Image className='image' width={385} height={467} src='/images/friends-error.svg' alt='' />
              </S.ImageDiv>
            </>
            )}
      </S.Container>
      <Footer />
    </>
  )
}
