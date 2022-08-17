import { Button } from 'components/Button'
import { Input } from 'components/Input'

import * as S from './styles'
import { ModalCVCProps } from './types'
export function ModalCVC ({ close }: ModalCVCProps) {
  return (
    <S.Container>
      <S.Title>Confirmar CVC</S.Title>
      <S.Text>Para poder alterar seu plano, você precisa <strong>confirmar o código de segurança do cartão.</strong></S.Text>
      <S.CardDataContainer>
        <S.CardDataTitle>Cartão</S.CardDataTitle>
        <S.CardData>**** **** **** 0768</S.CardData>
      </S.CardDataContainer>
      <S.CardData>
        <S.CardDataTitle>Confirmar CVC</S.CardDataTitle>
        {/* <Input /> */}
      </S.CardData>
      <S.CardData>
        <S.CardDataTitle>Validade</S.CardDataTitle>
        <S.CardData>03/29</S.CardData>
      </S.CardData>
      <Button variant='secondary' type='submit'>Continuar</Button>
      <Button variant='danger' type='button' onClick={close}>Cancelar</Button>
    </S.Container>
  )
}
