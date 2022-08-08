import Image from 'next/image'
import Link from 'next/link'

import { INVITE_FRIENDS_PAGE } from 'constants/routesPath'

import { Skeleton } from './Skeleton'
import { SideBarProps } from './types'
import * as S from './styles'

export function SideBar ({ loading, isDisabled = false }: SideBarProps) {
  if (loading) return <Skeleton />

  return (
    <S.Container>
      <S.NavButton>
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

      <S.NavButton>
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

      <S.NavButton disabled={isDisabled}>
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

      <Link href={INVITE_FRIENDS_PAGE}>
        <S.NavButton disabled={isDisabled}>
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
      </Link>

      <S.NavButton disabled={isDisabled}>
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

      <S.NavButton>
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

      <S.NavButton>
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

      <S.NavButton>
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

      <S.SignOutButton>
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
