import Link from 'next/link'
import Image from 'next/image'

import { DASHBOARD_PAGE } from 'constants/routesPath'

import * as S from './styles'
import { SuccessfulProps } from './types'

export function Successful ({ paragraph, textTitle }:SuccessfulProps) {
  return (
    <S.Container>
      <S.LeftWrapper>
        <Image width={325.02} height={360} src='/images/successful-signup.png' alt='' />
      </S.LeftWrapper>
      <S.Content>
        <Image width={61} height={60} src='/images/check-icon.png' alt='' />
        <S.TextTitle
          fontWeight={900}
          margin='1.875rem 0 3rem'
        >
          Tudo certo!
        </S.TextTitle>
        <S.Paragraph>
          {paragraph || (`Seu cadastro foi finalizado com sucesso!
        Aproveite as ofertas e Cashback no Clube Quantum!`)}
        </S.Paragraph>
        <S.TextTitle
          fontWeight={700}
        >
          {textTitle || 'Seja bem vindo!'}
        </S.TextTitle>
        <Link href={DASHBOARD_PAGE}>
          <S.Button>Retornar à minha conta</S.Button>
        </Link>
      </S.Content>
    </S.Container>
  )
}
