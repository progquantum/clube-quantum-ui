import Link from 'next/link'

import { Container } from './styles'

export function SuccessfulSignUp () {
  return (
    <Container>
      <img src='/images/check-icon.png' alt='' />
      <h3>Tudo certo!</h3>
      <p>
        Seu cadastro foi finalizado com sucesso!
        Aproveite as ofertas e Cashback no Clube Quantum!
      </p>
      <h3>Seja bem vindo!</h3>
      <Link href='/signin'>
        <button>Retornar para minha conta</button>
      </Link>
    </Container>
  )
}
