import { useCallback, useRef } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { RiBankLine } from 'react-icons/ri';

import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';
import { formatBankAccount } from 'utils/formatters/formatBankAccount';
import { performSchemaValidation } from 'utils/performSchemaValidation';

import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';

import { useWallet } from 'hooks/useWallet';

import { schema } from './schemas';
import { FormAccountData, ModalProps } from './types';

import * as S from './styles';

export function ModalBankAccount({
  onRequestClose,
  onUpdateFormStep,
}: ModalProps) {
  const { registerBankAccount } = useSubscriptionsDispatch();

  const { data } = useWallet();

  const hasBankAccount = data?.bank_account.current_account;
  const accountNumber = data?.bank_account.current_account;
  const lastDigit = data?.bank_account.current_account_check_number;
  const holderName = data?.bank_account.holder_name;

  const formRef = useRef<FormHandles>(null);

  const handleBankAccountSubmit: SubmitHandler<FormAccountData> = useCallback(
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
    <Modal onClose={onRequestClose}>
      <S.Form as={Form} ref={formRef} onSubmit={handleBankAccountSubmit}>
        <S.Line>
          <RiBankLine size={14} />
          Sua Conta Banco Um
        </S.Line>

        <S.Content>
          <S.Title>Cod Banco</S.Title>
          <S.Title>Agência</S.Title>
        </S.Content>
        <S.Content>
          <S.Data>396 - Banco Um</S.Data>
          <S.Data>0001</S.Data>
        </S.Content>

        <Input
          type="text"
          name="current_account"
          placeholder="00000000-0"
          icon={AiOutlineBank}
          onChange={e =>
            formRef.current.setFieldValue(
              'current_account',
              formatBankAccount(e.target.value),
            )
          }
          disabled={!!hasBankAccount}
          value={hasBankAccount ? `${accountNumber}-${lastDigit}` : null}
        />

        <Input
          type="text"
          name="holder_name"
          placeholder="Nome completo"
          icon={FiUser}
          disabled={!!hasBankAccount}
          value={hasBankAccount ? `${holderName}` : null}
        />

        <S.Description>
          {hasBankAccount
            ? 'Você já possui uma conta cadastrada.'
            : 'A conta a ser cadastrada deve ser a conta Banco Um na qual o seu CPF está vinculado. Se você ainda não possui uma conta Banco Um, poderá pular esta etapa. Não esqueça de informar sua conta futuramente para receber os benefícios.'}
        </S.Description>

        {!hasBankAccount ? <Button type="submit">Confirmar</Button> : null}

        {hasBankAccount ? (
          <Button onClick={onUpdateFormStep}>Continuar</Button>
        ) : (
          <Button variant="danger_outline" onClick={onUpdateFormStep}>
            Pular etapa
          </Button>
        )}
      </S.Form>
    </Modal>
  );
}
