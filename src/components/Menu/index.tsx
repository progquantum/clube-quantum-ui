import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export function Menu () {
  return (
    <S.Container>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={19.15} height={24} src='/images/icon-my-account.svg' alt='Icone Minha Conta' />
            </S.DivImage>
            <S.Text>Minha Conta</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={24} height={24} src='/images/icon-update-user.svg' alt='Icone Atualizar Cadastro' />
            </S.DivImage>
            <S.Text>Atualizar Cadastro</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={13.5} height={24} src='/images/icon-bank-statement.svg' alt='Icone Extratos' />
            </S.DivImage>
            <S.Text>Extratos</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={24} height={24} src='/images/icon-my-friends.svg' alt='Icone Meus Amigos' />
            </S.DivImage>
            <S.Text>Meus Amigos</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={21.18} height={24} src='/images/icon-my-orders.svg' alt='Icone Meus Pedidos' />
            </S.DivImage>
            <S.Text>Meus Pedidos</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={21.6} height={24} src='/images/icon-plans.svg' alt='Icone Planos' />
            </S.DivImage>
            <S.Text>Planos</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={21.6} height={24} src='/images/icon-licenses.svg' alt='Icone Lincenças' />
            </S.DivImage>
            <S.Text>Lincenças</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <Link href='/'>
        <S.ItemContainer>
          <S.Content>
            <S.DivImage>
              <Image width={18.46} height={24} src='/images/icon-privacy-center.svg' alt='Icone Central de Privacidade' />
            </S.DivImage>
            <S.Text>Central de Privacidade</S.Text>
          </S.Content>
        </S.ItemContainer>
      </Link>

      <S.DangerButton>
        <S.Text>Sair</S.Text>
        <Image width={16} height={16} src='/images/icon-logout.svg' alt='Icone Sair' />
      </S.DangerButton>

    </S.Container>
  )
}
