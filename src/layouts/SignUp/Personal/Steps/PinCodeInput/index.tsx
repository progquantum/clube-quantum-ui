import { FormEvent, useState } from 'react'

import { PinCodeGrid } from 'components/PinCodeGrid'

import { PinCodeProps } from './types'
import { Container } from './styles'

export function PinCodeInput ({ onNextFormStep, onPreviousFormStep }: PinCodeProps) {
  const PIN_LENGTH = 5

  const [pinCode, setPinCode] = useState<Array<number | undefined>>(
    new Array(PIN_LENGTH)
  )

  const onPinChange = (pinEntry: number | undefined, index: number) => {
    const pinsCode = [...pinCode]
    pinsCode[index] = pinEntry
    setPinCode(pinsCode)
  }

  async function onSubmit (event: FormEvent) {
    event.preventDefault()
    onNextFormStep()
  }

  return (
    <Container>
      <form onSubmit={(event) => onSubmit(event)}>
        <h3>
          Para continuar, insira o código de 5 dígitos
          enviado por SMS para o número que você digitou
        </h3>
        <PinCodeGrid
          pinCode={pinCode}
          onPinChange={onPinChange}
          pinLength={PIN_LENGTH}
        />
        <h3>Não recebeu?</h3>
        <p>
          Clique aqui para <span>receber outro código</span> ou {' '}
          <span onClick={onPreviousFormStep}>
            digite outro número
          </span>
        </p>
        <button>Confirmar</button>
      </form>
    </Container>
  )
}
