import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'components/Button'

import * as S from './styles'

export function SignUpPage () {
  return (
    <S.Container>
      <S.ContainerImage>
        <Image width={386} height={373} src='/images/girl-on-ladder.png' alt='imagem seja um membro Quantum' />
      </S.ContainerImage>

      <S.ContentsWrapper>
        <h1>Antes de prosseguirmos</h1>
        <p>Diga-nos, qual tipo de conta você deseja abrir?</p>

        <Link href='/signup/personal' passHref>
          <Button>
            Pessoa Física
          </Button>
        </Link>

        <Link href='/signup/business' passHref>
          <Button>
            Pessoa Juridica
          </Button>
        </Link>

      </S.ContentsWrapper>
    </S.Container>
  )
}
