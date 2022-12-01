import { useCallback } from 'react';
import { useTimer } from 'react-timer-hook';

import { useQueryParam } from 'use-query-params';

import { AuthLayout } from 'layouts/Auth';
import { Button } from 'components/Button';
import { useRecoveryPassword } from 'hooks/auth/useRecoveryPassword';
import { success } from 'helpers/notify/success';

import { getExpiryConfirmationTimestamp } from 'utils/getExpiryConfirmationTimestamp';

export function RequestPasswordResetSuccessPage() {
  const { mutate: sendRecoveryPasswordRequest } = useRecoveryPassword();

  const [email] = useQueryParam<string>('email');

  const { restart, seconds } = useTimer({
    expiryTimestamp: getExpiryConfirmationTimestamp(),
  });

  const handleRecoveryPassword = useCallback(async () => {
    restart(getExpiryConfirmationTimestamp());

    sendRecoveryPasswordRequest(
      { email },
      {
        onSuccess: (_, variables) => {
          success(`Enviado e-mail para ${variables.email}`);
        },
      },
    );
  }, [sendRecoveryPasswordRequest, restart, email]);

  const canResendLink = seconds <= 0;

  return (
    <AuthLayout
      backgroundImage="/images/reset-password.png"
      backgroundPosition="right"
      title="O link para resetar sua senha foi enviado!"
      description="Procure por um email do Clube Quantum e clique no link para resetar a senha."
    >
      <div className="form">
        <Button
          type="button"
          onClick={handleRecoveryPassword}
          disabled={!canResendLink}
        >
          {canResendLink
            ? 'Enviar novamente'
            : `Por favor, espere ${seconds} para reenviar o email`}
        </Button>
      </div>
    </AuthLayout>
  );
}
