import { FormEvent, useState } from 'react'

import { useAuthState } from 'contexts/auth/AuthContext'
import { PinCodeGrid } from 'components/PinCodeGrid'
import { Button } from 'components/Button'
import { useCheckPhoneCode } from 'hooks/useCheckPhoneCode'
import { useSendPhoneCode } from 'hooks/useSendPhoneCode'

import { PinCodeProps } from './types'
import * as S from './styles'

const PIN_LENGTH = 6

export function PinCodeInput ({ onNextFormStep, onPreviousFormStep }: PinCodeProps) {
  const { mutate: requestCheckPhoneCode, isLoading: isCheckingPhone } = useCheckPhoneCode()
  const { mutate: requestSendPhoneCode, isLoading: isSendingPhoneCode } = useSendPhoneCode()
  const { registerUser } = useAuthState()

  const isLoading = isSendingPhoneCode || isCheckingPhone

  const [pinCode, setPinCode] = useState<Array<string>>(
    new Array(PIN_LENGTH).fill('')
  )

  const handlePinChange = (pinEntry: string, index: number) => {
    const pinsCode = [...pinCode]
    pinsCode[index] = pinEntry ?? ''
    setPinCode(pinsCode)
  }

  function handleSubmit (event: FormEvent) {
    event.preventDefault()

    const code = pinCode.join('')
    const { phone } = registerUser

    requestCheckPhoneCode({
      phone,
      code
    }, {
      onSuccess: () => onNextFormStep()
    })
  }

  function handleSendAnotherCode () {
    const { phone } = registerUser
    requestSendPhoneCode({ phone: `+55 ${phone}` })
  }

  return (
    <S.Container>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
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
          Clique aqui para <span onClick={() => handleSendAnotherCode()}>receber outro código</span> ou {' '}
          <span onClick={onPreviousFormStep}>
            digite outro número
          </span>
        </S.Paragraph>
        <Button
          type='submit'
          loading={isLoading}
          disabled={isLoading}
        >
          Confirmar
        </Button>
      </S.Form>
    </S.Container>
  )
}
