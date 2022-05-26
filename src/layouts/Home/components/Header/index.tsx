import NextLink from 'next/link'

import * as S from './styles'

export function Header () {
  return (
    <S.Container>
      <NextLink href='/'>
        <img src='/assets/quantum-logo.svg' alt='Club Quantum logo' />
      </NextLink>
      <nav>
        <NextLink href='/'>Saiba Mais</NextLink>
        <NextLink href='/'>Seja um parceiro</NextLink>
        <NextLink href='/'>Central de dúvidas</NextLink>
      </nav>
      <div>
        <S.UserIcon />
        <div>
          <p>
            Olá, faça seu <NextLink href='/login'>Login</NextLink>
          </p>
          <p>
            ou{' '}
            <NextLink href='/register/personal' passHref>
              Cadastre-se
            </NextLink>
          </p>
        </div>
      </div>
    </S.Container>
  )
}
