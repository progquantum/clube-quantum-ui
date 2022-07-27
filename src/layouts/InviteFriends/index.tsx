import Image from 'next/image'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import { useFindMe } from 'hooks/useFindMe'
import { useShare } from 'hooks/useShare'

import * as S from './styles'

export function InviteFriendsPage () {
  const { data } = useFindMe()

  const inviteCode = `http://localhost:3000/signup/${data?.invite_code}`

  const share = useShare()

  const handleShare = () => {
    share({
      text: 'Seja um membro Clube Quantum!',
      title: 'Cadastra-se a partir do link de convite abaixo.',
      url: inviteCode
    })
  }

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
            Seu link de convite é: <strong>{inviteCode}</strong>
          </S.LinkButton>

          <S.ContainerLinks>
            <S.InviteButton>
              <Image width={34} height={33} src='/images/instagram-blue.svg' alt='Instagram' />
              Convidar via Instagram
            </S.InviteButton>
            <S.InviteButton>
              <Image width={34} height={33} src='/images/facebook-blue.svg' alt='Facebook' />
              Convidar via Facebook
            </S.InviteButton>
            <S.InviteButton>
              <Image width={34} height={33} src='/images/whatsapp-blue.svg' alt='WhatsApp' />
              Convidar via WhatsApp
            </S.InviteButton>
            <S.InviteButton>
              <Image width={34} height={33} src='/images/email-blue.svg' alt='E-Mail' />
              Convidar via E-Mail
            </S.InviteButton>
            <S.InviteButton onClick={handleShare}>
              <Image width={34} height={33} src='/images/link-blue.svg' alt='Link do convite' />
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
