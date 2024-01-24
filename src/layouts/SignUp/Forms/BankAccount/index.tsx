/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image';
import Link from 'next/link';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { FaAppStoreIos } from 'react-icons/fa';

import { Button } from 'components/Button';
import { AuthLayout } from 'layouts/Auth';

import { useAuthState } from 'contexts/auth/AuthContext';

import * as S from './styles';
import { BankAccountProps } from './types';

export function BankAccount({
  onUpdateFormStep,
  onPreviousFormStep,
}: BankAccountProps) {
  const { registerUser } = useAuthState();

  const { name, cpf, cnpj, company_name } = registerUser;

  const isIndividualPerson = cpf !== undefined;

  const styleLink = {
    display: 'flex',
    padding: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    flex: '1 0 0',
    borderRadius: '28px',
    boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
  };

  return (
    <AuthLayout
      backgroundImage="/images/signin.svg"
      backgroundPosition="right"
      bancoUm
    >
      <S.Container className="form">
        <S.BankingData>
          <S.BankingAccount>
            <S.TitleContent data-cy="signup_bankAccountDocument">
              Conta {isIndividualPerson ? 'CPF' : 'CNPJ'}
            </S.TitleContent>

            <S.TextContent>{isIndividualPerson ? cpf : cnpj}</S.TextContent>
          </S.BankingAccount>
        </S.BankingData>

        <S.BankingOwner>
          <S.TitleContent>Titular</S.TitleContent>
          <S.TextContent>
            {isIndividualPerson ? name : company_name}
          </S.TextContent>
        </S.BankingOwner>
        <S.BankingOwner>
          <S.TitleApp>Baixe seu app agora</S.TitleApp>
          <S.TextContent>
            "Sua conta bancária será aberta em até 48 horas para receber seu
            cashback automaticamente. Cadastre seu cartão Visa Banco Um Flex nas
            Wallet/carteira Digital, Google PAY, Apple PAY Samsung PAY e //
            eslint-disable-next-line react/no-unescaped-entities facilite a sua
            utilização."
          </S.TextContent>
        </S.BankingOwner>
        <S.Links>
          <Link
            style={styleLink}
            href="https://play.google.com/store/apps/details?id=br.com.biz.mobile.id42342994000174"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play
            <Image
              data-testid="google play logo"
              alt="google play logo"
              width={29}
              height={29}
              src="/images/google_play.png"
            />
          </Link>

          <Link
            style={styleLink}
            href="https://apps.apple.com/br/app/banco-um-flex-multibeneficios/id6474634196"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store
            <FaAppStoreIos size={29} />
          </Link>
        </S.Links>

        <Button data-cy="next-step-button" onClick={onUpdateFormStep}>
          Continuar
        </Button>
      </S.Container>
      <button
        style={{
          display: 'flex',
          width: '100%',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'transparent',
        }}
        type="button"
        onClick={onPreviousFormStep}
      >
        <IoReturnDownBackSharp size={20} />
        Voltar
      </button>
    </AuthLayout>
  );
}
