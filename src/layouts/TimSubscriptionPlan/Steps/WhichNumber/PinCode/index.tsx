import { useState } from 'react';

import { useTimPlanStore } from 'store/tim';

import * as S from './styles';

export function PinCode() {
  const setPinCode = useTimPlanStore(state => state.setPinCode);
  const [currentCell, setCurrentCell] = useState(0);

  const validatePinCode = (pinCode: number | string) => {
    if (!Number.isNaN(pinCode)) {
      setPinCode(String(pinCode));
    }
  };

  return (
    <S.PinCodeContainer>
      <S.PinCodeText>
        Para continuar, insira o código de 6 dígitos enviado por SMS para o
        número que você digitou
      </S.PinCodeText>
      <S.PinCodeGrid>
        <S.PinCodeCell
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="\d*"
          onBlur={e => validatePinCode(e.target.value)}
          onChange={() => setCurrentCell(1)}
        />
        <S.PinCodeCell
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="\d*"
          onBlur={e => validatePinCode(e.target.value)}
          onChange={() => setCurrentCell(2)}
          {...(currentCell === 1 && 'autoFocus')}
        />
        <S.PinCodeCell
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="\d*"
          onBlur={e => validatePinCode(e.target.value)}
          onChange={() => setCurrentCell(3)}
          {...(currentCell === 2 && 'autoFocus')}
        />
        <S.PinCodeCell
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="\d*"
          onBlur={e => validatePinCode(e.target.value)}
          onChange={() => setCurrentCell(4)}
          {...(currentCell === 3 && 'autoFocus')}
        />
        <S.PinCodeCell
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="\d*"
          onBlur={e => validatePinCode(e.target.value)}
          onChange={() => setCurrentCell(5)}
          {...(currentCell === 4 && 'autoFocus')}
        />
        <S.PinCodeCell
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="\d*"
          onBlur={e => validatePinCode(e.target.value)}
          {...(currentCell === 5 && 'autoFocus')}
        />
      </S.PinCodeGrid>
      <S.PinCodeNotReceived>Não recebeu?</S.PinCodeNotReceived>
      <S.PinCodeSpan>
        Clique aqui para <S.Bold>receber outro código</S.Bold> ou{' '}
        <S.Bold>digite outro número.</S.Bold>
      </S.PinCodeSpan>
    </S.PinCodeContainer>
  );
}
