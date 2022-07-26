import { FormEvent, useState } from 'react'

import { PinCodeGrid } from 'components/PinCodeGrid'

import { PinCodeProps } from './types'
import * as S from './styles'

const PIN_LENGTH = 5

export function PinCodeInput ({ onNextFormStep, onPreviousFormStep }: PinCodeProps) {
  const [pinCode, setPinCode] = useState<string[]>(
    new Array(PIN_LENGTH)
  )

  const handlePinChange = (pinEntry: string, index: number) => {
    const pinsCode = [...pinCode]
    pinsCode[index] = pinEntry
    setPinCode(pinsCode)
  }

  function onSubmit (event: FormEvent) {
    event.preventDefault()
    onNextFormStep()
  }

  return (
    <S.Container>
      <S.Form onSubmit={(e) => onSubmit(e)}>
        <h3>
          Para continuar, insira o código de 5 dígitos
          enviado por SMS para o número que você digitou
        </h3>
        <PinCodeGrid
          pinCode={pinCode}
          onPinChange={handlePinChange}
          pinLength={PIN_LENGTH}
        />
        <h3>Não recebeu?</h3>
        <S.Paragraph>
          Clique aqui para <span>receber outro código</span> ou {' '}
          <span onClick={onPreviousFormStep}>
            digite outro número
          </span>
        </S.Paragraph>
        <S.Button>Confirmar</S.Button>
      </S.Form>
    </S.Container>
  )
}
