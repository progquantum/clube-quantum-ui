import { useCallback, useRef, useState } from 'react';

import { Form } from '@unform/web';

import { FormHandles, SubmitHandler } from '@unform/core';

import { useTimPlanStore } from 'store/tim';

import { useCheckPhoneCode } from 'hooks/phones/useCheckPhoneCode';

import { error } from 'helpers/notify/error';

import { PinCodeGrid } from 'components/PinCodeGrid';

import { success } from 'helpers/notify/success';

import { useSendPhoneCode } from 'hooks/phones/useSendPhoneCode';

import * as S from './styles';
import { PinCodeValue } from './types';

export function PinCode() {
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const setPinCodeStore = useTimPlanStore(state => state.setPinCode);
  const setIsPortability = useTimPlanStore(state => state.setIsPortability);
  const nextStep = useTimPlanStore(state => state.nextStep);
  const { mutate: validateCode } = useCheckPhoneCode();
  const formRef = useRef<FormHandles>(null);
  const [pinCode, setPinCode] = useState<Array<string>>(new Array(6).fill(''));
  const { mutate: requestSendPhoneCode } = useSendPhoneCode();

  const handlePinChange = (pinEntry: string, index: number) => {
    const pinsCode = [...pinCode];
    pinsCode[index] = pinEntry ?? '';
    setPinCode(pinsCode);
    setPinCodeStore(pinsCode.join(''));
  };

  const handleCheckPinCode: SubmitHandler<PinCodeValue> = useCallback(() => {
    const phone = '55'.concat(phoneNumber);
    validateCode(
      { phone, code: pinCode.join('') },
      {
        onSuccess: () => {
          setIsPortability(false);
          nextStep();
          setPinCodeStore('');
          success('Número validado com sucesso');
        },
        onError: () => {
          error('Código inválido');
        },
      },
    );
  }, [pinCode, phoneNumber]);

  const handleSendAnotherCode = () => {
    const phone = '55'.concat(phoneNumber);
    requestSendPhoneCode(
      { phone },
      {
        onSuccess: () => {
          success(`Código enviado novamente para o número ${phoneNumber}`);
        },
      },
    );
  };

  return (
    <S.PinCodeContainer>
      <S.PinCodeText>
        Para continuar, insira o código de 6 dígitos enviado por SMS para o
        número que você digitou
      </S.PinCodeText>
      <Form
        ref={formRef}
        onSubmit={handleCheckPinCode}
        className="form"
        id="pin-form"
      >
        <PinCodeGrid
          pinCode={pinCode}
          onPinChange={handlePinChange}
          pinLength={6}
        />
      </Form>
      <S.PinCodeNotReceived>Não recebeu?</S.PinCodeNotReceived>
      <S.PinCodeSpan>
        Clique aqui para{' '}
        <S.ButtonPinCode onClick={handleSendAnotherCode}>
          receber outro código
        </S.ButtonPinCode>{' '}
        ou <S.Bold>digite outro número.</S.Bold>
      </S.PinCodeSpan>
    </S.PinCodeContainer>
  );
}
