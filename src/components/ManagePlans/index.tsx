import Image from 'next/image'

import { ManagePlansProps } from './types'
import * as S from './styles'

export function ManagePlans ({ children, width }:ManagePlansProps) {
  return (
    <S.Container width={width}>
      <S.Content>
        <Image width={17.89} height={19.87} src='/images/icon-plan.svg' alt='icone plano' />
        <S.TitleContent>Seu plano</S.TitleContent>
      </S.Content>
      <S.Title>Você não está inserido em nenhum plano.</S.Title>
      <S.Text>
        Para tirar o máximo de proveito dos benefícios do clube quantum, você precisa aderir a um plano.
      </S.Text>
      {children}
    </S.Container>
  )
}
