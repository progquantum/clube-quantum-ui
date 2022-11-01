import { useCallback, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { AiOutlineBank } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { RiBankLine } from 'react-icons/ri';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Modal as ModalBankAccount } from 'components/Modal';
import { formatBankAccount } from 'utils/formatters/formatBankAccount';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { useRegisterBankAccount } from 'hooks/useRegisterBankAccount';
import { QUERY_KEY_WALLET } from 'hooks/useWallet';

import {
  BankAccount,
  ModalBankAccountFormProps,
  ModalBankAccountProps,
} from './types';
import { schema } from './schemas';
import * as S from './styles';

export function Modal({
  onRequestClose,
  onRequestNewModal,
  isOpen,
}: ModalBankAccountProps) {
  const [showNewModal, setShowNewModal] = useState(false);
  const [bankAccountData, setBankAccountData] = useState<BankAccount>(null);

  const formRef = useRef<FormHandles>(null);
  const queryClient = useQueryClient();

  const { mutateAsync: updateBankAccount, isLoading } =
    useRegisterBankAccount();

  const handleRequestNewModal = () => {
    setShowNewModal(prevState => !prevState);
    onRequestNewModal();
  };

  const handleCloseNewConfirmModal = () => {
    setShowNewModal(false);
  };

  const handleUpdateBankAccount = (data: ModalBankAccountFormProps) => {
    const { current_account, holder_name, current_account_check_number } = data;
    const account_number = data.current_account.slice(0, -2);
    const account_digit = data.current_account.slice(-1);

    setBankAccountData({
      current_account,
      holder_name,
      current_account_check_number,
      account_number,
      account_digit,
    });

    handleRequestNewModal();
  };

  const handleSubmit: SubmitHandler<ModalBankAccountFormProps> = useCallback(
    async data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => handleUpdateBankAccount(data))
        .catch(noop);
    },
    [],
  );

  const handlePostBankAccount = () => {
    updateBankAccount(
      {
        current_account: bankAccountData.account_number,
        current_account_check_number: bankAccountData.account_digit,
        holder_name: bankAccountData.holder_name,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEY_WALLET);
          handleCloseNewConfirmModal();
        },
      },
    );
  };

  return (
    <>
      {isOpen && (
        <ModalBankAccount onClose={onRequestClose}>
          <S.YourAccount>
            <RiBankLine />
            <S.ContentTitle>Sua conta Banco Um</S.ContentTitle>
          </S.YourAccount>

          <S.BankingData>
            <S.BankingAccount>
              <S.TitleContent>Cód. Banco</S.TitleContent>

              <S.TextContent>396 - Banco Um</S.TextContent>
            </S.BankingAccount>

            <S.BankingAccount>
              <S.TitleContent>Agência</S.TitleContent>
              <S.TextContent>0001</S.TextContent>
            </S.BankingAccount>
          </S.BankingData>

          <S.BankingAccountForm as={Form} ref={formRef} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="current_account"
              placeholder="Conta corrente"
              icon={AiOutlineBank}
              onChange={e => {
                formRef.current.setFieldValue(
                  'current_account',
                  formatBankAccount(e.target.value),
                );
              }}
              inputMode="numeric"
            />
            <Input
              type="text"
              name="holder_name"
              placeholder="Nome completo do titular"
              icon={FiUser}
            />
            <S.InfoText>
              A conta do Banco Um deve estar vinculada ao mesmo CPF cadastrado
              no Clube Quantum.
            </S.InfoText>
            <S.ButtonContinue type="submit">Confirmar</S.ButtonContinue>
          </S.BankingAccountForm>
        </ModalBankAccount>
      )}

      {showNewModal && (
        <ModalBankAccount onClose={handleCloseNewConfirmModal}>
          <S.YourConfirmAccount>
            <S.ContentConfirmAccount>
              Sua conta Banco Um
            </S.ContentConfirmAccount>
          </S.YourConfirmAccount>

          <S.BankingConfirmData>
            <S.BankingConfirmAccount>
              <S.TitleContent>Cód. Banco</S.TitleContent>

              <S.TextConfirmAccount>396 - Banco Um</S.TextConfirmAccount>
            </S.BankingConfirmAccount>

            <S.BankingConfirmAccount>
              <S.TitleContent>Agência</S.TitleContent>
              <S.TextConfirmAccount>0001</S.TextConfirmAccount>
            </S.BankingConfirmAccount>

            <S.BankingConfirmAccount>
              <S.TitleContent>Conta</S.TitleContent>
              <S.TextConfirmAccount>
                {bankAccountData?.current_account}
              </S.TextConfirmAccount>
            </S.BankingConfirmAccount>

            <S.BankingConfirmAccount>
              <S.TitleContent>Titular</S.TitleContent>
              <S.TextConfirmAccount>
                {bankAccountData?.holder_name}
              </S.TextConfirmAccount>
            </S.BankingConfirmAccount>
          </S.BankingConfirmData>
          <S.ButtonContinue onClick={handlePostBankAccount} loading={isLoading}>
            Finalizar
          </S.ButtonContinue>
          <Button variant="danger_outline" onClick={handleRequestNewModal}>
            Voltar
          </Button>
        </ModalBankAccount>
      )}
    </>
  );
}
