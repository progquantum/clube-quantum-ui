import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiMail, FiUser, FiLock, FiCalendar } from 'react-icons/fi';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { personalDataSchema } from 'schemas/signUp';
import { formatBirthDate } from 'utils/formatters/formatBirthDate';

import { IndividualPersonProps, SignUpFormValues } from './types';
import * as S from './styles';

export function IndividualPerson({
  onUpdateFormStep,
  onPreviousFormStep,
}: IndividualPersonProps) {
  const { handleSubmit, control, register, setValue, formState } = useForm({
    resolver: yupResolver(personalDataSchema),
  });

  const { signUp } = useAuthDispatch();

  const { isDirty, isSubmitting } = formState;
  const isButtonDisabled = !isDirty || isSubmitting;

  const handleFormatFormData = (data: SignUpFormValues) => {
    const { birth_date } = data;
    const formattedBirthDate = birth_date.split('/').reverse().join('-');

    const formData = {
      ...data,
      birth_date: formattedBirthDate,
    };

    return formData;
  };

  const handleSignUp: SubmitHandler<SignUpFormValues> = data => {
    const formData = handleFormatFormData(data);

    signUp(formData);
    onUpdateFormStep();
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(handleSignUp)}>
        <Input
          type="text"
          icon={FiUser}
          label="Nome Completo"
          name="name"
          placeholder="Nome completo"
          control={control}
        />

        <Input
          type="text"
          label="Data de nascimento"
          control={control}
          placeholder="Data de nascimento"
          icon={FiCalendar}
          {...register('birth_date', {
            onChange: e => {
              setValue('birth_date', formatBirthDate(e.target.value));
            },
          })}
        />

        <Input
          type="email"
          label="Email"
          name="email"
          control={control}
          placeholder="Preencha seu email"
          icon={FiMail}
        />

        <Input
          type="email"
          label="Confimar e-mail"
          name="email_confirmation"
          control={control}
          placeholder="Confirme seu email"
          icon={FiMail}
        />

        <Input
          type="password"
          label="Criar senha"
          name="password"
          icon={FiLock}
          control={control}
          placeholder="Senha"
        />

        <Input
          type="password"
          label="Confirmar Senha"
          name="password_confirmation"
          icon={FiLock}
          control={control}
          placeholder="Confirmar senha"
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
