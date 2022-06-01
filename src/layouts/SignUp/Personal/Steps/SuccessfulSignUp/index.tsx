import Link from 'next/link'
import Image from 'next/image'

import { Container } from './styles'

export function SuccessfulSignUp () {
  return (
    <Container>
      <Image width={61} height={60} src='/images/check-icon.png' alt='' />
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
