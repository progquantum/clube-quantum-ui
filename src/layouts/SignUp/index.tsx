import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SIGN_UP_BUSINESS_PAGE, SIGN_UP_PERSONAL_PAGE } from 'constants/routesPath'
import { useAuthDispatch } from 'contexts/auth/AuthContext'

import * as S from './styles'

export function SignUpPage () {
  const { signUp } = useAuthDispatch()

  const router = useRouter()
  const inviteCode = router.query.invite as string

  const handleSubmit = () => (
    signUp({
      inviteCode
    })
  )

  return (
    <S.Container>
      <S.ContainerImage>
        <Image width={386} height={373} src='/images/girl-on-ladder.png' alt='Imagem seja um membro Quantum' />
      </S.ContainerImage>

      <S.Wrap>
        <S.Title>Antes de prosseguirmos</S.Title>
        <S.Paragraph>Diga-nos, qual tipo de conta você deseja abrir?</S.Paragraph>

        <Link href={SIGN_UP_PERSONAL_PAGE} passHref>
          <S.LinkButton onClick={handleSubmit}>
            Pessoa Física
          </S.LinkButton>
        </Link>

        <Link href={SIGN_UP_BUSINESS_PAGE} passHref>
          <S.LinkButton onClick={handleSubmit}>
            Pessoa Juridica
          </S.LinkButton>
        </Link>
      </S.Wrap>
    </S.Container>
  )
}
