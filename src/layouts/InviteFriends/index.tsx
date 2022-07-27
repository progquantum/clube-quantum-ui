import Image from 'next/image'
import Link from 'next/link'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import * as S from './styles'

export function InviteFriendsPage () {
  return (
    <>
      <title>Convidar Amigos</title>

      <Header />
      <S.Container>
        <S.ContainerContent>
          <h1>Nós damos valor às amizades</h1>
          <p>E recompensamos você, para cada Amigo convidado que se cadastrar no Clube Quantum.</p>
          <S.ContainerSpan>
            <p>Seu link de convite é: <strong>quantumclube.com/usuário01</strong></p>
          </S.ContainerSpan>
          <S.ContainerLinks>
            <S.ContainerAlignLinks>
              <Image width={34} height={33} src='/images/instagram-blue.svg' alt='Instagram' />
              <Link href='/'>Convidar via Instagram</Link>
            </S.ContainerAlignLinks>
            <S.ContainerAlignLinks>
              <Image width={34} height={33} src='/images/facebook-blue.svg' alt='Facebook' />
              <Link href='/'>Convidar via Facebook</Link>
            </S.ContainerAlignLinks>
            <S.ContainerAlignLinks>
              <Image width={34} height={33} src='/images/whatsapp-blue.svg' alt='WhatsApp' />
              <Link href='/'>Convidar via WhatsApp</Link>
            </S.ContainerAlignLinks>
            <S.ContainerAlignLinks>
              <Image width={34} height={33} src='/images/email-blue.svg' alt='E-Mail' />
              <Link href='/'>Convidar via E-Mail</Link>
            </S.ContainerAlignLinks>
            <S.ContainerAlignLinks>
              <Image width={34} height={33} src='/images/link-blue.svg' alt='Link do convite' />
              <Link href='/'>Copiar o link do convite</Link>
            </S.ContainerAlignLinks>
          </S.ContainerLinks>
        </S.ContainerContent>
        <S.ImageDiv>
          <Image className='image' width={385} height={467} src='/images/friends.svg' alt='' />
        </S.ImageDiv>
      </S.Container>
      <Footer />
    </>
  )
}
