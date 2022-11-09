import { useCallback, useRef } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { formatBankAccount } from 'utils/formatters/formatBankAccount';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { AuthLayout } from 'layouts/Auth';

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';

import { BankAccountProps, FormValues } from './types';
import { schema } from './schemas';
import * as S from './styles';

export function BankAccount({
  onUpdateFormStep,
  onPreviousFormStep,
}: BankAccountProps) {
  const { registerBankAccount } = useSubscriptionsDispatch();
  const formRef = useRef<FormHandles>(null);

  const handleBankAccountSubmit: SubmitHandler<FormValues> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          registerBankAccount({
            current_account: data.current_account.slice(0, -2),
            current_account_check_number: data.current_account.slice(-1),
            holder_name: data.holder_name,
          });
          onUpdateFormStep();
        })

        .catch(noop);
    },
    [],
  );

  return (
    <AuthLayout
      backgroundImage="/images/signup.png"
      title="Insira uma conta bancária"
    >
      <Form ref={formRef} onSubmit={handleBankAccountSubmit} className="form">
        <S.Content>
          <S.BankDataTitle>Cod. Banco</S.BankDataTitle>
          <S.BankDataTitle>Agência</S.BankDataTitle>
        </S.Content>
        <S.Content>
          <S.BankData>396 - Banco Um</S.BankData>
          <S.BankData>0001</S.BankData>
        </S.Content>
        <Input
          type="text"
          inputMode="numeric"
          name="current_account"
          placeholder="Conta corrente"
          icon={AiOutlineBank}
          onChange={e =>
            formRef.current.setFieldValue(
              'current_account',
              formatBankAccount(e.target.value),
            )
          }
        />
        <Input
          type="text"
          name="holder_name"
          placeholder="Nome completo do titular"
          icon={FiUser}
        />
        <S.BankInfo>
          A conta a ser cadastrada deve ser a conta Banco Um na qual o CPF/CNPJ,
          informado anteriormente está vinculado.
        </S.BankInfo>

        <Button type="submit">Continuar</Button>
      </Form>
      <button type="button" onClick={onPreviousFormStep}>
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
