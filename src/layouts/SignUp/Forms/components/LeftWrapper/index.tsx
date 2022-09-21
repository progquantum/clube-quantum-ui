import { useTheme } from 'styled-components'

import { BancoUm } from 'components/Illustrations/BancoUm'

import * as S from './styles'
import { LeftWrapperProps } from './types'

export function LeftWrapper ({ title, paragraph }:LeftWrapperProps) {
  const { colors } = useTheme()
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Text>{paragraph}</S.Text>
      <BancoUm
        color={colors.mediumaquamarine}
        width='75'
        height='45'
      />
      <S.SubTitle>Ainda não é um cliente Banco Um?</S.SubTitle>
      <S.SubText>Conheça as vantagens de ser um cliente Banco Um</S.SubText>
      <S.ButtonKnowMore>Saiba mais</S.ButtonKnowMore>
    </S.Container>
  )
}
