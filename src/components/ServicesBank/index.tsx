import Link from 'next/link'
import Image from 'next/image'

import { INVITE_FRIENDS_PAGE, MANAGE_PAYMENT_PAGE } from '../../constants/routesPath'
import * as S from './styles'

export function ServicesBank () {
  return (
    <S.Container>
      <S.ButtonItem disabled>
        <Image width={25} height={25} src='/images/icon-my-account.svg' alt='Icon Usuário' />
        <S.Text>Atualizar Cadastro</S.Text>
      </S.ButtonItem>

      <Link href={MANAGE_PAYMENT_PAGE}>
        <S.ButtonItem>
          <Image width={25} height={25} src='/images/icon-payment.svg' alt='Icon dados pagamento' />
          <S.Text>Dados de Pagamento</S.Text>
        </S.ButtonItem>
      </Link>

      <Link href={INVITE_FRIENDS_PAGE}>
        <S.ButtonItem>
          <Image width={25} height={25} src='/images/icon-invited-friends.svg' alt='Icon convidar amigos' />
          <S.Text>Convidar amigos</S.Text>
        </S.ButtonItem>
      </Link>

      <S.ButtonMarketplace disabled>
        <Image width={25} height={25} src='/images/icon-my-orders.svg' alt='Icon marketplace' />
        <S.Text>Marketplace</S.Text>
      </S.ButtonMarketplace>

    </S.Container>

  )
}
