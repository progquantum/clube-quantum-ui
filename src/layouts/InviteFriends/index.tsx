import Image from 'next/image'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import { useFindMe } from 'hooks/useFindMe'
import { useShare } from 'hooks/useShare'

import { Button } from 'components/Button'

import * as S from './styles'

export function InviteFriendsPage () {
  const { data, isLoading } = useFindMe()

  const inviteCode = `http://localhost:3000/signup/${data?.invite_code}`

  const isInviteCode = data?.invite_code

  const share = useShare()

  const handleShare = () => {
    share({
      text: 'Seja um membro Clube Quantum!',
      title: 'Cadastra-se a partir do link de convite abaixo.',
      url: inviteCode
    })
  }
  if (isLoading) return <h1>Carregando...</h1>
  return (
    <>
      <title>Convidar Amigos</title>

      <Header />
      {isInviteCode
        ? (
          <S.Container>
            <S.Wrap>
              <S.Heading>Nós damos valor às amizades</S.Heading>
              <S.Content>
                E recompensamos você, para cada Amigo convidado que se cadastrar no Clube Quantum.
              </S.Content>

              <S.LinkButton variant='secondary' onClick={handleShare}>
                Seu link de convite é: <strong>{inviteCode}</strong>
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
            </S.Wrap>

            <S.ImageDiv>
              <Image className='image' width={385} height={467} src='/images/friends.svg' alt='' />
            </S.ImageDiv>
          </S.Container>
          )
        : (
          <S.Container>
            <S.Wrap>
              <S.Heading>Oops, você ainda não pode convidar amigos!</S.Heading>
              <S.Content>
                Conheça os planos disponíveis no Clube Quantum, e clique abaixo para acessar e começar usufruir dos benefícios.
              </S.Content>

              <S.ButtonPlan>
                <S.HeadingInfo>
                  Para adquirir um plano quantum, basta clicar no botão abaixo e inserir as informações necessárias.
                </S.HeadingInfo>
                <S.InfoButton>Comece agora</S.InfoButton>
              </S.ButtonPlan>
            </S.Wrap>
            <S.ImageDiv>
              <Image className='image' width={385} height={467} src='/images/friends-error.svg' alt='' />
            </S.ImageDiv>
          </S.Container>
          )}
      <Footer />
    </>
  )
}
