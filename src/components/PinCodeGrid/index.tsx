import { ChangeEvent, useRef } from 'react';

import { StyledPinInput } from './styles';
import { PinCodeGridProps } from './types';

export function PinCodeGrid({
  pinCode,
  onPinChange,
  pinLength,
}: PinCodeGridProps) {
  const inputRef = useRef<HTMLInputElement[]>([]);

  function handleChangeInputFocus(pinCodeIndex: number) {
    const input = inputRef.current[pinCodeIndex];
    if (input) {
      input.focus();
    }
  }

  function handleOnChange(
    { target }: ChangeEvent<HTMLInputElement>,
    index: number,
  ) {
    const { value } = target;
    const pinCodeNumber = value.trim();

    if (!value.length) {
      return;
    }
    if (Number(pinCodeNumber) > 9) return;

    onPinChange(pinCodeNumber, index);

    if (index < pinLength - 1) {
      handleChangeInputFocus(index + 1);
    }
  }

  const handleOnKeyDown = (
    { nativeEvent }: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const keyboardKeyCode = nativeEvent.code;

    if (keyboardKeyCode !== 'Backspace') {
      return;
    }

    if (!pinCode[index]) {
      handleChangeInputFocus(index - 1);
      return;
    }

    onPinChange(undefined, index);
  };

  return (
    <div>
      {Array.from({ length: pinLength }, (_, index) => (
        <StyledPinInput
          data-cy="pin-code-cell"
          type="text"
          inputMode="numeric"
          onKeyDown={event => handleOnKeyDown(event, index)}
          key={index}
          ref={element => {
            inputRef.current[index] = element || undefined;
          }}
          onChange={event => handleOnChange(event, index)}
          value={pinCode[index]}
        />
      ))}
    </div>
  );
}
