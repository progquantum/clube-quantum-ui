import Link from 'next/link';

import { IoReturnDownBackSharp } from 'react-icons/io5';

import { SIGN_IN_PAGE } from 'constants/routesPath';

import { AuthLayout } from 'layouts/Auth';

import { Container, Account } from './styles';

export function Successful() {
  return (
    <AuthLayout
      backgroundImage="/images/signup.png"
      title="Tudo certo seja bem vindo!"
    >
      <Container>
        <p>
          Seu cadastro foi finalizado com sucesso! <br />
          Aproveite as ofertas e Cashback no Clube Quantum!
        </p>
      </Container>

      <Link href={SIGN_IN_PAGE} prefetch>
        <Account>
          <IoReturnDownBackSharp size={20} />
          Retornar para minha conta
        </Account>
      </Link>
    </AuthLayout>
  );
}
