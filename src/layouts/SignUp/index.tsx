import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export function SignUpPage () {
  return (
    <S.Container>
      <S.ContainerImage>
        <Image width={386} height={373} src='/images/girl-on-ladder.png' alt='Imagem seja um membro Quantum' />
      </S.ContainerImage>

      <S.Wrap>
        <S.Title>Antes de prosseguirmos</S.Title>
        <S.Paragraph>Diga-nos, qual tipo de conta você deseja abrir?</S.Paragraph>

        <Link href='/signup/personal' passHref>
          <S.LinkButton>
            Pessoa Física
          </S.LinkButton>
        </Link>

        <Link href='/signup/business' passHref>
          <S.LinkButton>
            Pessoa Juridica
          </S.LinkButton>
        </Link>

      </S.Wrap>
    </S.Container>
  )
}
