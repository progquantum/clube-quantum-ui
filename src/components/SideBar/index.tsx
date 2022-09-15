import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { DASHBOARD_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath'
import { useAuthDispatch } from 'contexts/auth/AuthContext'

import * as S from './styles'

export function SideBar () {
  const { signOut } = useAuthDispatch()
  const router = useRouter()
  const pathName = router.pathname

  return (
    <S.Container>
      <Link href={DASHBOARD_PAGE}>
        <S.NavButton activePath={pathName === DASHBOARD_PAGE}>
          <S.WrapImage>
            <Image
              width={19.15}
              height={24}
              src='/images/icon-my-account.svg'
              alt='Icone Minha Conta'
            />
          </S.WrapImage>
          Minha Conta
        </S.NavButton>
      </Link>

      <S.NavButton disabled>
        <S.WrapImage>
          <Image
            width={24}
            height={24}
            src='/images/icon-update-user.svg'
            alt='Icone Atualizar Cadastro'
          />
        </S.WrapImage>
        Atualizar Cadastro
      </S.NavButton>

      <S.NavButton disabled>
        <S.WrapImage>
          <Image
            width={13.5}
            height={24}
            src='/images/icon-bank-statement.svg'
            alt='Icone Extratos'
          />
        </S.WrapImage>
        Extratos
      </S.NavButton>

      <S.NavButton disabled>
        <S.WrapImage>
          <Image
            width={24}
            height={24}
            src='/images/icon-my-friends.svg'
            alt='Icone Meus Amigos'
          />
        </S.WrapImage>
        Meus Amigos
      </S.NavButton>

      <S.NavButton disabled>
        <S.WrapImage>
          <Image
            width={21.18}
            height={24}
            src='/images/icon-my-orders.svg'
            alt='Icone Meus Pedidos'
          />
        </S.WrapImage>
        Meus Pedidos
      </S.NavButton>

      <Link href={SUBSCRIPTIONS_PAGE}>
        <S.NavButton activePath={pathName === SUBSCRIPTIONS_PAGE}>
          <S.WrapImage>
            <Image
              width={21.6}
              height={24}
              src='/images/icon-plans.svg'
              alt='Icone Planos'
            />
          </S.WrapImage>
          Planos
        </S.NavButton>
      </Link>

      <S.NavButton disabled>
        <S.WrapImage>
          <Image
            width={21.6}
            height={24}
            src='/images/icon-licenses.svg'
            alt='Icone Lincenças'
          />
        </S.WrapImage>
        Lincenças
      </S.NavButton>

      <S.NavButton disabled>
        <S.WrapImage>
          <Image
            width={18.46}
            height={24}
            src='/images/icon-privacy-center.svg'
            alt='Icone Central de Privacidade'
          />
        </S.WrapImage>
        Central de Privacidade
      </S.NavButton>

      <S.SignOutButton onClick={signOut}>
        Sair
        <Image
          width={16}
          height={16}
          src='/images/icon-logout.svg'
          alt='Icone Sair'
        />
      </S.SignOutButton>
    </S.Container>
  )
}
