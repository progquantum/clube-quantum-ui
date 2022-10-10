import { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useQueryClient } from 'react-query';
import { FormHandles } from '@unform/core';
import { useTheme } from 'styled-components';
import { AiOutlineBank } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import Modal from 'react-modal';
import noop from 'lodash.noop';

import { Input } from 'components/Input';
import { BancoUm } from 'components/Illustrations/BancoUm';
import { formatBankAccount } from 'utils/formatters/formatBankAccount';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { useRegisterBankAccount } from 'hooks/useRegisterBankAccount';
import { QUERY_KEY_FIND_BILLING } from 'hooks/useWallet';
import { Button } from 'components/Button';

import { CloseModal } from 'components/CloseModal';

import { ModalBankAccountFormProps, ModalBankAccountProps } from './types';
import { schema } from './schemas';
import * as S from './styles';

export function ModalBankAccount({
  isOpen,
  onRequestClose,
  onRequestNewModal,
}: ModalBankAccountProps) {
  const [newConfirmModal, setNewConfirmModal] = useState(false);
  const [bankAccountData, setBankAccountData] = useState(null);

  const { colors } = useTheme();

  const formRef = useRef<FormHandles>(null);
  const queryClient = useQueryClient();

  const { mutateAsync: postBankAccount, isLoading } = useRegisterBankAccount();

  const handleRequestNewModal = () => {
    setNewConfirmModal(prevState => !prevState);
    onRequestNewModal();
  };

  const handleCloseNewConfirmModal = () => {
    setNewConfirmModal(false);
  };

  const handleValidateBankAccount = useCallback(
    async (data: ModalBankAccountFormProps) => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          const accountNumber = data.current_account.slice(0, -2);
          const accountDigit = data.current_account.slice(-1);
          setBankAccountData({
            accountNumber,
            accountDigit,
            ...data,
          });
          handleRequestNewModal();
        })
        .catch(noop);
    },
    [bankAccountData],
  );

  const handlePostBankAccount = () => {
    postBankAccount(
      {
        current_account: bankAccountData.accountNumber,
        current_account_check_number: bankAccountData.accountDigit,
        holder_name: bankAccountData.holder_name,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEY_FIND_BILLING);
          handleCloseNewConfirmModal();
        },
      },
    );
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-container"
      >
        <S.YourAccount>
          <BancoUm color={colors.gray[200]} width="22" height="16" />
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

        <S.BankingAccountForm
          as={Form}
          ref={formRef}
          onSubmit={handleValidateBankAccount}
        >
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
          />
          <Input
            type="text"
            name="holder_name"
            placeholder="Nome completo do titular"
            icon={FiUser}
          />
          <S.InfoText>
            A conta do Banco Um deve estar vinculada ao mesmo CPF cadastrado no
            Clube Quantum.
          </S.InfoText>
          <S.ButtonContinue type="submit">Confirmar</S.ButtonContinue>
          <CloseModal onClick={onRequestClose} />
        </S.BankingAccountForm>
      </Modal>

      <Modal
        isOpen={newConfirmModal}
        onRequestClose={handleCloseNewConfirmModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-container"
      >
        <>
          <S.YourConfirmAccount>
            <BancoUm color={colors.mediumslateBlue} width="22" height="16" />
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
        </>
      </Modal>
    </>
  );
}
