import { useState, FormEvent } from 'react';
import { AxiosError } from 'axios';
import { FiLogOut } from 'react-icons/fi';

import { useAuthState } from 'contexts/auth/AuthContext';
import { PinCodeGrid } from 'components/PinCodeGrid';
import { Button } from 'components/Button';
import { useCheckPhoneCode } from 'hooks/useCheckPhoneCode';
import { useSendPhoneCode } from 'hooks/useSendPhoneCode';
import { ErrorResponse } from 'shared/errors/apiSchema';
import { success } from 'helpers/notify/success';
import { error } from 'helpers/notify/error';
import { AuthLayout } from 'layouts/Auth';

import { PinCodeProps } from './types';
import * as S from './styles';

const PIN_LENGTH = 6;

export function PinCode({ onNextFormStep, onPreviousFormStep }: PinCodeProps) {
  const { mutate: requestCheckPhoneCode, isLoading: isCheckingPhone } =
    useCheckPhoneCode();
  const { mutate: requestSendPhoneCode, isLoading: isSendingPhoneCode } =
    useSendPhoneCode();
  const { registerUser } = useAuthState();

  const isButtonDisabled = isSendingPhoneCode || isCheckingPhone;

  const [pinCode, setPinCode] = useState<Array<string>>(
    new Array(PIN_LENGTH).fill(''),
  );

  const handlePinChange = (pinEntry: string, index: number) => {
    const pinsCode = [...pinCode];
    pinsCode[index] = pinEntry ?? '';
    setPinCode(pinsCode);
  };

  const handlePhoneCodeVerification = (event: FormEvent) => {
    event.preventDefault();
    const code = pinCode.join('');
    const { phone } = registerUser;

    requestCheckPhoneCode(
      {
        phone,
        code,
      },
      {
        onSuccess: () => onNextFormStep(),
        onError: (err: AxiosError<ErrorResponse>) => {
          if (err.message === 'Invalid code') error('Código inválido!');
        },
      },
    );
  };

  const handleSendAnotherCode = () => {
    const { phone } = registerUser;

    requestSendPhoneCode(
      { phone },
      {
        onSuccess: () => {
          success(`Código enviado novamente para o número ${phone}`);
        },
      },
    );
  };

  return (
    <AuthLayout
      backgroundImage="/images/signup.png"
      title="Código de verificação"
    >
      <form onSubmit={handlePhoneCodeVerification} className="form">
        <S.Title>
          Para continuar, insira o código de 6 dígitos enviado por SMS para o
          número que você digitou
        </S.Title>
        <PinCodeGrid
          pinCode={pinCode}
          onPinChange={handlePinChange}
          pinLength={PIN_LENGTH}
        />
        <S.SubTitle>Não recebeu?</S.SubTitle>
        <S.Paragraph>
          Clique aqui para
          <S.ButtonPinCode type="button" onClick={handleSendAnotherCode}>
            &nbsp;receber outro código&nbsp;
          </S.ButtonPinCode>
          <br />
          ou
          <S.ButtonPinCode type="button" onClick={onPreviousFormStep}>
            &nbsp;digite outro número
          </S.ButtonPinCode>
        </S.Paragraph>
        <Button
          type="submit"
          loading={isCheckingPhone}
          disabled={isButtonDisabled}
        >
          Confirmar
        </Button>
      </form>
      <button type="button" onClick={onPreviousFormStep}>
        <FiLogOut />
        Voltar
      </button>
    </AuthLayout>
  );
}
