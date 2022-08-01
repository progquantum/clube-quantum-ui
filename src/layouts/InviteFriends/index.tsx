import Image from 'next/image'

import Skeleton from 'react-loading-skeleton'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import { useFindMe } from 'hooks/useFindMe'
import { useShare } from 'hooks/useShare'

import * as S from './styles'
import { CantInviteFriends } from './CantInviteFriends'

export function InviteFriendsPage () {
  const { data, isLoading } = useFindMe()

  const linkCode = `http://localhost:3000/signup?invite-code=${data?.invite_code}`

  const inviteCode = data?.invite_code

  const shouldShowInviteCode = isLoading && !inviteCode

  const shouldNotShowInviteFriends = !isLoading && !inviteCode

  const share = useShare()

  const handleShare = () => {
    share({
      text: 'Seja um membro Clube Quantum!',
      title: 'Cadastra-se a partir do link de convite abaixo.',
      url: linkCode
    })
  }

  if (shouldNotShowInviteFriends) return <CantInviteFriends />

  return (
    <>
      <title>Convidar Amigos</title>

      <Header />
      <S.Container>
        <S.Wrap>
          <S.Heading>Nós damos valor às amizades</S.Heading>
          <S.Content>
            E recompensamos você, para cada Amigo convidado que se cadastrar no Clube Quantum.
          </S.Content>
          <S.LinkButton variant='secondary' onClick={handleShare}>
            Seu link de convite é: {shouldShowInviteCode
            ? (
              <Skeleton width={256} height={24} />
              )
            : (
              <S.InviteCode>{linkCode}</S.InviteCode>
              )}
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
      <Footer />
    </>
  )
}
