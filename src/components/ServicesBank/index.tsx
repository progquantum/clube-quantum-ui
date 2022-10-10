import Link from 'next/link';

import Image from 'next/image';

import * as S from './styles';
import {
  INVITE_FRIENDS_PAGE,
  MANAGE_PAYMENT_PAGE,
  UPDATE_REGISTER_PAGE,
} from '../../constants/routesPath';
import { ServicesBankProps } from './types';
import { Skeleton } from './Skeleton';

export function ServicesBank({ loading }: ServicesBankProps) {
  if (loading) return <Skeleton />;

  return (
    <S.Container>
      <Link href={UPDATE_REGISTER_PAGE}>
        <S.ButtonItem>
          <Image
            width={25}
            height={25}
            src="/images/icon-my-account.svg"
            alt="Icon Usuário"
          />
          <S.Text>Atualizar Cadastro</S.Text>
        </S.ButtonItem>
      </Link>

      <Link href={MANAGE_PAYMENT_PAGE}>
        <S.ButtonItem>
          <Image
            width={25}
            height={25}
            src="/images/icon-payment.svg"
            alt="Icon dados pagamento"
          />
          <S.Text>Dados de Pagamento</S.Text>
        </S.ButtonItem>
      </Link>

      <Link href={INVITE_FRIENDS_PAGE}>
        <S.ButtonItem>
          <Image
            width={25}
            height={25}
            src="/images/icon-invited-friends.svg"
            alt="Icon convidar amigos"
          />
          <S.Text>Convidar amigos</S.Text>
        </S.ButtonItem>
      </Link>

      <S.ButtonMarketplace disabled>
        <Image
          width={25}
          height={25}
          src="/images/icon-my-orders.svg"
          alt="Icon marketplace"
        />
        <S.Text>Marketplace</S.Text>
      </S.ButtonMarketplace>
    </S.Container>
  );
}
