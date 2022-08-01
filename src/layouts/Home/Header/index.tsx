import Link from 'next/link'
import Image from 'next/image'

import { SIGN_IN_PAGE, SIGN_UP_PAGE } from 'constants/routesPath'

import * as S from './styles'

export function Header () {
  return (
    <S.Container>
      <Link href='/'>
        <Image width={53} height={70} src='/images/quantum-logo.svg' alt='Club Quantum logo' />
      </Link>

      <S.Nav>
        <Link href='/'>Saiba Mais</Link>
        <Link href='/'>Seja um parceiro</Link>
        <Link href='/'>Central de dúvidas</Link>
      </S.Nav>

      <S.Box>
        <S.UserIcon />

        <p>
          Olá, faça seu <Link href={SIGN_IN_PAGE}>Login</Link>
          <br />
          ou <Link href={SIGN_UP_PAGE} passHref>Cadastre-se </Link>
        </p>
      </S.Box>
    </S.Container>
  )
}
