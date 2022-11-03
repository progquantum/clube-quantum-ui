import Link from 'next/link';

import { FiLogIn } from 'react-icons/fi';

import { SIGN_IN_PAGE } from 'constants/routesPath';

import { AuthLayout } from 'layouts/Auth';

import { Container } from './styles';

export function Successful() {
  return (
    <AuthLayout
      backgroundImage="/images/signup.png"
      title="Tudo certo seja bem vindo!"
    >
      <Container>
        <p>
          Seu cadastro foi finalizado com sucesso! <br /> Aproveite as ofertas e
          Cashback no Clube Quantum!
        </p>
      </Container>

      <Link href={SIGN_IN_PAGE} prefetch>
        <a>
          <FiLogIn />
          Retornar para minha conta
        </a>
      </Link>
    </AuthLayout>
  );
}
