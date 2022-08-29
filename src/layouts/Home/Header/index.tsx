import Link from 'next/link'
import Image from 'next/image'

import { SIGN_IN_PAGE } from 'constants/routesPath'

import * as S from './styles'

export function Header () {
  return (
    <S.Shadow>
      <S.Container>

        <Link href='/'>
          <Image width={53} height={70} src='/images/quantum-logo.svg' alt='Club Quantum logo' />
        </Link>

        <S.Nav>
          <Link href='/'>Saiba Mais</Link>
          <Link href='/'>Seja um parceiro</Link>
          <Link href='/'>Central de dúvidas</Link>

          <Link href={SIGN_IN_PAGE}>
            <S.LoginButton>Fazer Login</S.LoginButton>
          </Link>
        </S.Nav>

      </S.Container>
    </S.Shadow>
  )
}
