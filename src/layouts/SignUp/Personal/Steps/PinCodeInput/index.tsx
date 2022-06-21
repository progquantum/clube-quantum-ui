import { FormEvent, useState } from 'react'
import { useMutation } from 'react-query'

import { validatePinCodeService } from 'services/client-side/signUpServices/validatePinCodeService'

import { useSignUpState } from 'contexts/signup/SignUpContext'

import { PinCodeGrid } from 'components/PinCodeGrid'

import { PinCodeProps } from './types'
import * as S from './styles'

export function PinCodeInput ({ onNextFormStep, onPreviousFormStep }: PinCodeProps) {
  const PIN_LENGTH = 6
  const { data } = useSignUpState()
  const { mutateAsync: validatePinCode } = useMutation(validatePinCodeService, {
    onSuccess: () => alert('Success'),
    onError: (error: any) => alert(error.response.data.message)
  })

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

    const code = pinCode.join('')
    const { phone } = data

    await validatePinCode({
      phoneNumber: `+55 ${phone}`,
      validationCode: code
    })

    onNextFormStep()
  }

  return (
    <S.Container>
      <S.Form onSubmit={(event) => onSubmit(event)}>
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
