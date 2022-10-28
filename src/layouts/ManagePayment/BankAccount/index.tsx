import { useState } from 'react';
import { useTheme } from 'styled-components';

import { BancoUm } from 'components/Illustrations/BancoUm';
import { Button } from 'components/Button';

import { Skeleton } from '../Skeleton';
import { Modal } from './Modal';
import { BankAccountProps } from './types';
import * as S from './styles';

export function BankAccount({ user, loading }: BankAccountProps) {
  const [showModal, setShowModal] = useState(false);
  const { colors } = useTheme();

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  const holderName = user?.bank_account.holder_name;
  const currentAccount = user?.bank_account.current_account;
  const lastDigits = user?.bank_account.current_account_check_number;
  const hasBankAccount = user?.bank_account.holder_name;

  if (loading) return <Skeleton />;

  return (
    <S.Content>
      {hasBankAccount ? (
        <>
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

            <S.BankingAccount>
              <S.TitleContent>Conta</S.TitleContent>
              <S.TextContent>
                {currentAccount}-{lastDigits}
              </S.TextContent>
            </S.BankingAccount>
          </S.BankingData>

          <S.BankingOwner>
            <S.TitleContent>Titular</S.TitleContent>
            <S.TextContent>{holderName}</S.TextContent>
          </S.BankingOwner>
        </>
      ) : (
        <>
          <S.YourAccount>
            <BancoUm color={colors.gray[200]} width="22" height="22" />
            <S.ContentTitle>Sua conta Banco Um</S.ContentTitle>
          </S.YourAccount>
          <S.Text>
            Nenhuma conta Banco Um registrada, gostaria de adicionar uma nova
            conta?
          </S.Text>
          <Button onClick={handleRequestModal}>Cadastrar conta bancária</Button>
        </>
      )}
      <Modal
        isOpen={showModal}
        onRequestClose={handleRequestModal}
        onRequestNewModal={() => setShowModal(prevState => !prevState)}
      />
    </S.Content>
  );
}
