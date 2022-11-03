import Link from 'next/link';

import {
  RiBankCardLine,
  RiEditBoxLine,
  RiShoppingBasket2Line,
  RiUserStarLine,
} from 'react-icons/ri';

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
          <RiEditBoxLine />
          <S.Text>Atualizar Cadastro</S.Text>
        </S.ButtonItem>
      </Link>

      <Link href={MANAGE_PAYMENT_PAGE}>
        <S.ButtonItem>
          <RiBankCardLine />
          <S.Text>Dados de Pagamento</S.Text>
        </S.ButtonItem>
      </Link>

      <Link href={INVITE_FRIENDS_PAGE}>
        <S.ButtonItem>
          <RiUserStarLine />
          <S.Text>Convidar amigos</S.Text>
        </S.ButtonItem>
      </Link>

      <S.ButtonItem disabled>
        <RiShoppingBasket2Line />
        <S.Text>Marketplace</S.Text>
      </S.ButtonItem>
    </S.Container>
  );
}
