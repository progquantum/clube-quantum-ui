import Link from 'next/link';
import { useRouter } from 'next/router';

import { AuthLayout } from 'layouts/Auth';
import {
  SIGN_UP_BUSINESS_PAGE,
  SIGN_UP_PERSONAL_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Button } from 'components/Button';

import * as S from './styles';

export function SignUpPage() {
  const { signUp } = useAuthDispatch();
  const router = useRouter();
  const inviteCode = router.query.invite as string;

  const handleSubmit = () =>
    signUp({
      inviteCode,
    });

  return (
    <AuthLayout
      title="Antes de prosseguirmos"
      description="Qual tipo de conta você deseja abrir?"
      backgroundImage="/images/signup.png"
    >
      <S.Wrap>
        <Link href={SIGN_UP_PERSONAL_PAGE} passHref>
          <Button onClick={handleSubmit}>Pessoa Física</Button>
        </Link>

        <Link href={SIGN_UP_BUSINESS_PAGE} passHref>
          <Button onClick={handleSubmit}>Pessoa Juridica</Button>
        </Link>
      </S.Wrap>
    </AuthLayout>
  );
}
