import { useEffect, useState } from 'react';

import { AuthLayout } from 'layouts/Auth';
import { Button } from 'components/Button';
import { useRecoveryPassword } from 'hooks/auth/useRecoveryPassword';
import { success } from 'helpers/notify/success';

import { SuccessRequestProps } from './types';

export function SuccessRequestPage({ email }: SuccessRequestProps) {
  const { mutate: sendRecoveryPasswordRequest } = useRecoveryPassword();

  const [counter, setCounter] = useState(30);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  const handleRecoveryPassword = () => {
    sendRecoveryPasswordRequest(
      { email },
      {
        onSuccess: (_, variables) => {
          success(`Enviado e-mail para ${variables.email}`);
          setCounter(30);
        },
      },
    );
  };

  return (
    <AuthLayout
      backgroundImage="/images/reset-password.png"
      backgroundPosition="right"
      title="Email enviado com sucesso"
      description=" Um link para a alteração de senha foi enviado para o seu email. Se não encontrá-lo, verifique seu lixo eletrônico."
    >
      <div className="form">
        {counter === 0 ? (
          <Button onClick={handleRecoveryPassword}>Enviar novamente</Button>
        ) : (
          <span className="description">
            Aguarde <b>{counter} segundos</b> para enviar novamente
          </span>
        )}
      </div>
    </AuthLayout>
  );
}
