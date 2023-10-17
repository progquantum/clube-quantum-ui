import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLogIn } from 'react-icons/fi';

import { AuthLayout } from 'layouts/Auth';
import {
  SIGN_UP_BUSINESS_PAGE,
  SIGN_IN_PAGE,
  SIGN_UP_PERSONAL_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Button } from 'components/Button';

import * as S from './styles';

export function SignUpPage() {
  const { signUp } = useAuthDispatch();
  const router = useRouter();
  const inviteCode = router.query.invite as string;
  const handleSubmit = () => signUp({ invited_by: inviteCode });

  return (
    <AuthLayout
      title="Antes de prosseguirmos"
      description="Qual tipo de conta você deseja abrir?"
      backgroundImage="/images/signup.png"
    >
      <S.Wrap>
        <Link
          data-cy="personal-link"
          href={{
            pathname: SIGN_UP_PERSONAL_PAGE,
            query: inviteCode && { invite: inviteCode },
          }}
          passHref
        >
          <Button onClick={handleSubmit}>Pessoa Física</Button>
        </Link>

        <Link href={SIGN_UP_BUSINESS_PAGE} passHref>
          <Button onClick={handleSubmit}>Pessoa Juridica</Button>
        </Link>
      </S.Wrap>

      {/* Should wrap link component with element due to this 
      issue of next/link https://github.com/vercel/next.js/issues/127 */}
      <Link href={SIGN_IN_PAGE} legacyBehavior>
        <a className="anchor">
          <FiLogIn />
          Já possuo uma conta
        </a>
      </Link>
    </AuthLayout>
  );
}
