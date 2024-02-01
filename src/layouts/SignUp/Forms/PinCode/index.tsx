import { FormEvent, useState } from 'react';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { AxiosError } from 'axios';

import { Button } from 'components/Button';
import { PinCodeGrid } from 'components/PinCodeGrid';
import { useAuthState } from 'contexts/auth/AuthContext';
import { success } from 'helpers/notify/success';
import { useCheckPhoneCode } from 'hooks/phones/useCheckPhoneCode';
import { useSendPhoneCode } from 'hooks/phones/useSendPhoneCode';
import { AuthLayout } from 'layouts/Auth';
import { error } from 'helpers/notify/error';

import * as S from './styles';
import { PinCodeProps } from './types';

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
        onError: (err: unknown) => {
          if (err instanceof AxiosError) {
            const errorMessage = err.response.data.message;

            if (errorMessage === 'Invalid code') {
              error('Código inserido inválido');
            }
          }
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
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
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
          Clique para
          <S.ButtonPinCode type="button" onClick={handleSendAnotherCode}>
            &nbsp;receber outro código&nbsp;
          </S.ButtonPinCode>
          <br />
        </S.Paragraph>
        <Button
          type="submit"
          loading={isCheckingPhone}
          disabled={isButtonDisabled}
          data-cy="next-step-button"
        >
          Confirmar
        </Button>
      </form>
      <button
        style={{
          display: 'flex',
          width: '100%',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'transparent',
        }}
        type="button"
        onClick={onPreviousFormStep}
      >
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
