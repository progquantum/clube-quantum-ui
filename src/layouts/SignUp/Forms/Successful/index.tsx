import Link from 'next/link';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { useEffect } from 'react';

import { SIGN_IN_PAGE } from 'constants/routesPath';
import { AuthLayout } from 'layouts/Auth';
import { useAuthDispatch } from 'contexts/auth/AuthContext';

import { Account, Container } from './styles';

export function Successful() {
  const { deleteUserRegister } = useAuthDispatch();

  useEffect(() => deleteUserRegister(), []);
  return (
    <AuthLayout
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      title="Tudo certo seja bem vindo!"
    >
      <Container>
        <p>
          Seu cadastro foi finalizado com sucesso! <br />
          Aproveite as ofertas e Cashback no Clube Quantum!
        </p>
      </Container>

      <Link href={SIGN_IN_PAGE}>
        <Account data-cy="signup_goToDashboard">
          <IoReturnDownBackSharp size={20} />
          Retornar para minha conta
        </Account>
      </Link>
    </AuthLayout>
  );
}
