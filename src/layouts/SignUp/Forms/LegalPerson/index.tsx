import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { legalPersonDataSchema } from 'schemas/signUp';

import { LegalPersonProps, SignUpFormValues } from './types';
import * as S from './styles';

export function LegalPerson({
  onUpdateFormStep,
  onPreviousFormStep,
}: LegalPersonProps) {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(legalPersonDataSchema),
  });

  const { signUp } = useAuthDispatch();

  const { isSubmitting } = formState;
  const isButtonDisabled = isSubmitting;

  const handleSignUp: SubmitHandler<SignUpFormValues> = data => {
    signUp(data);
    onUpdateFormStep();
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(handleSignUp)}>
        <Input
          type="text"
          label="Razão Social"
          name="company_name"
          control={control}
          placeholder="Razão social"
          icon={FiUser}
        />

        <Input
          type="email"
          label="E-mail"
          name="email"
          control={control}
          placeholder="Email"
          icon={FiMail}
        />

        <Input
          type="email"
          label="Confirmar e-mail"
          name="email_confirmation"
          control={control}
          placeholder="Confirmar email"
          icon={FiMail}
        />

        <Input
          type="password"
          label="Criar senha"
          name="password"
          control={control}
          placeholder="Criar"
          icon={FiLock}
        />

        <Input
          type="password"
          label="Confirmar Senha"
          name="password_confirmation"
          control={control}
          icon={FiLock}
        />
        <S.ButtonGroup>
          <Button type="submit" disabled={isButtonDisabled}>
            Continuar
          </Button>
          <Button variant="secondary" onClick={onPreviousFormStep}>
            Voltar
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  );
}
