import { ChangeEvent, useRef } from 'react'

import { StyledPinInput } from './styles'
import { PinCodeGridProps } from './types'

export function PinCodeGrid ({
  pinCode,
  onPinChange,
  pinLength
}: PinCodeGridProps) {
  const inputRef = useRef<HTMLInputElement[]>([])

  function changeInputFocus (pinCodeIndex: number) {
    const input = inputRef.current[pinCodeIndex]

    if (input) {
      input.focus()
    }
  }

  function onChange (
    { target }: ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { value } = target
    const pinCodeNumber = value.trim()

    if (!value.length) {
      return
    }

    onPinChange(pinCodeNumber, index)

    if (index < pinLength - 1) {
      changeInputFocus(index + 1)
    }
  }

  const onKeyDown = (
    { nativeEvent }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const keyboardKeyCode = nativeEvent.code

    if (keyboardKeyCode !== 'Backspace') {
      return
    }

    if (!pinCode[index]) {
      changeInputFocus(index - 1)
      return
    }

    onPinChange(undefined, index)
  }

  return (
    <div>
      {Array.from({ length: pinLength }, (_, index) => (
        <StyledPinInput
          onKeyDown={(event) => onKeyDown(event, index)}
          key={index}
          ref={(element) => {
            inputRef.current[index] = element || undefined
          }}
          onChange={(event) => onChange(event, index)}
          value={pinCode[index]}
        />
      ))}
    </div>
  )
}
