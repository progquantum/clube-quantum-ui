import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiUser } from 'react-icons/fi';
import Link from 'next/link';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { Input } from 'components/Input';
import { cnpjSchema } from 'schemas/signUp';
import { formatCNPJ } from 'utils/formatters/formatCNPJ';
import { Button } from 'components/Button';

import { SIGN_UP_PAGE } from 'constants/routesPath';

import { CNPJProps, FormData } from './types';
import * as S from './styles';

export function CNPJ({ onUpdateFormStep }: CNPJProps) {
  const { handleSubmit, control, register, setValue, formState } = useForm({
    resolver: yupResolver(cnpjSchema),
  });

  const { signUp } = useAuthDispatch();

  const { isDirty, isSubmitting } = formState;
  const isButtonDisabled = !isDirty || isSubmitting;

  function onSubmit(data: FormData) {
    signUp(data);
    onUpdateFormStep();
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="CPNJ"
          name="cnpj"
          control={control}
          placeholder="CNPJ"
          icon={FiUser}
          {...register('cnpj', {
            onChange: e => {
              setValue('cnpj', formatCNPJ(e.target.value));
            },
          })}
        />
        <S.ButtonGroup>
          <Button type="submit" disabled={isButtonDisabled}>
            Continuar
          </Button>
          <Link href={SIGN_UP_PAGE}>
            <Button variant="secondary">Voltar</Button>
          </Link>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  );
}
