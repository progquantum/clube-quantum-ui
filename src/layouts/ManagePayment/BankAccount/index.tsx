/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image';

import Link from 'next/link';

import { FaAppStoreIos } from 'react-icons/fa';

import * as S from './styles';
import { BankAccountProps } from './types';

export function BankAccount({ user }: BankAccountProps) {
  const IsIndividualPerson = user?.user?.individual_person !== null;

  const legal_name = user?.user?.legal_person?.company_name;
  const individual_name = user?.user?.individual_person?.name;

  const holderName = IsIndividualPerson ? individual_name : legal_name;

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
    <S.Content>
      <S.YourAccount>
        <S.ContainerImage>
          <Image
            data-testid="logo"
            alt="banco um logo"
            width={20}
            height={20}
            src="/images/banco-um-logo-azul-dark.svg"
          />
        </S.ContainerImage>

        <S.ContentTitle>Sua conta Banco Um Flex Multibenefícios</S.ContentTitle>
      </S.YourAccount>

      <S.BankingData>
        <S.BankingAccount>
          <S.TitleContent>
            Conta {IsIndividualPerson ? 'CPF' : 'CNPJ'}
          </S.TitleContent>

          <S.TextContent>
            {IsIndividualPerson
              ? user?.user?.individual_person?.cpf
              : user?.user?.legal_person?.cnpj}
          </S.TextContent>
        </S.BankingAccount>
      </S.BankingData>

      <S.BankingOwner>
        <S.TitleContent>Titular</S.TitleContent>
        <S.TextContent>{holderName}</S.TextContent>
      </S.BankingOwner>
      <S.BankingOwner>
        <S.TitleApp>Baixe seu app agora</S.TitleApp>
        <S.TextContent>
          "Sua conta bancária será aberta em até 48 horas para receber seu
          cashback automaticamente. Cadastre seu cartão Visa Banco Um Flex nas
          Wallet/carteira Digital, Google PAY, Apple PAY Samsung PAY e facilite
          a sua utilização."
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
    </S.Content>
  );
}
