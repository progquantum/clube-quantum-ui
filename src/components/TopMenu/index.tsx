import Link from 'next/link'

import Image from 'next/image'

import * as S from './styles'
import { INVITE_FRIENDS_PAGE } from '../../constants/routesPath'

export function TopMenu () {
  return (

    <S.Container>

      <S.DivItem>
        <Image width={25} height={25} src='/images/icon-my-account.svg' alt='Icon Usuário' />
        <S.Text>Olá, usuario</S.Text>
      </S.DivItem>

      <S.DivItem>
        <Image width={25} height={25} src='/images/icon-payment.svg' alt='Icon dados pagamento' />
        <S.Text>Dados de Pagamento</S.Text>
      </S.DivItem>

      <Link href={INVITE_FRIENDS_PAGE}>
        <S.DivItem>
          <Image width={25} height={25} src='/images/icon-invited-friends.svg' alt='Icon convidar amigos' />
          <S.Text>Convidar amigos</S.Text>
        </S.DivItem>
      </Link>

      <S.DivDisabled>
        <Image width={25} height={25} src='/images/icon-disabled-marketplace.svg' alt='Icon marketplace' />
        <S.Text>Marketplace</S.Text>
      </S.DivDisabled>

    </S.Container>

  )
}
