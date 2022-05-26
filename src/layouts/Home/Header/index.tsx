import Link from 'next/link'

import * as S from './styles'

export function Header () {
  return (
    <S.Container>
      <Link href='/'>
        <img src='/images/quantum-logo.svg' alt='Club Quantum logo' />
      </Link>

      <S.Nav>
        <Link href='/'>Saiba Mais</Link>
        <Link href='/'>Seja um parceiro</Link>
        <Link href='/'>Central de dúvidas</Link>
      </S.Nav>

      <S.Box>
        <S.UserIcon />

        <p>
          Olá, faça seu <Link href='/login'>Login</Link>
          <br />
          ou <Link href='/register/personal' passHref>Cadastre-se </Link>
        </p>
      </S.Box>
    </S.Container>
  )
}
