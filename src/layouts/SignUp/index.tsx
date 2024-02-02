import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLogIn } from 'react-icons/fi';

import { Button } from 'components/Button';
import {
  SIGN_IN_PAGE,
  SIGN_UP_BUSINESS_PAGE,
  SIGN_UP_PERSONAL_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { AuthLayout } from 'layouts/Auth';

import * as S from './styles';

export function SignUpPage() {
  const { signUp } = useAuthDispatch();
  const router = useRouter();
  const inviteCode = router.query.invite as string;
  const handleSubmit = () => {
    if (inviteCode !== '') {
      signUp({ invited_by: inviteCode });
    }
  };

  return (
    <AuthLayout
      title="Antes de prosseguirmos"
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      description="Qual tipo de conta você deseja abrir?"
    >
      <S.Wrap>
        <Link
          href={{
            pathname: SIGN_UP_PERSONAL_PAGE,
            query: inviteCode && { invite: inviteCode },
          }}
          data-cy="personal-link"
        >
          <Button onClick={handleSubmit}>Pessoa Física</Button>
        </Link>

        <Link
          href={{
            pathname: SIGN_UP_BUSINESS_PAGE,
            query: inviteCode && { invite: inviteCode },
          }}
          data-cy="business-link"
        >
          <Button onClick={handleSubmit}>Pessoa Juridica</Button>
        </Link>
      </S.Wrap>

      {/* Should wrap link component with element due to this
      issue of next/link https://github.com/vercel/next.js/issues/127 */}
      <Link href={SIGN_IN_PAGE} legacyBehavior>
        <a
          style={{
            display: 'flex',
            width: '100%',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
          className="anchor"
        >
          <FiLogIn />
          Já possuo uma conta
        </a>
      </Link>
    </AuthLayout>
  );
}
