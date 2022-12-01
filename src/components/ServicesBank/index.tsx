import Link from 'next/link';

import {
  INVITE_FRIENDS_PAGE,
  MANAGE_PAYMENT_PAGE,
  UPDATE_USER_ACCOUNT_PAGE,
} from 'constants/routesPath';

import { ServicesBankProps } from './types';
import { Skeleton } from './Skeleton';

import * as S from './styles';

export function ServicesBank({ loading }: ServicesBankProps) {
  if (loading) return <Skeleton />;

  return (
    <S.Container>
      <Link href={UPDATE_USER_ACCOUNT_PAGE}>
        <S.ButtonItem>
          <img src="/images/edit.svg" alt="" />
          <S.Text>Atualizar Cadastro</S.Text>
        </S.ButtonItem>
      </Link>

      <Link href={MANAGE_PAYMENT_PAGE}>
        <S.ButtonItem>
          <img src="/images/card.svg" alt="" />
          <S.Text>Dados de Pagamento</S.Text>
        </S.ButtonItem>
      </Link>

      <Link href={INVITE_FRIENDS_PAGE}>
        <S.ButtonItem>
          <img src="/images/friend.svg" alt="" />
          <S.Text>Convidar amigos</S.Text>
        </S.ButtonItem>
      </Link>

      <S.ButtonItem disabled>
        <img src="/images/marketplace.svg" alt="" />
        <S.Text>Marketplace</S.Text>
      </S.ButtonItem>
    </S.Container>
  );
}
