import Image from 'next/legacy/image';

import { useState } from 'react';

import { Header } from 'components/Header';

import { CenterLayout } from 'components/CenterLayout';

import { HeroLayout } from 'components/HeroLayout';
import { ShowOffers } from 'layouts/Marketplace/Components/ShowOffers';
import { AccountCard } from 'layouts/Marketplace/Components/AccountCard';

import { useTimPlanStore } from 'store/tim';

import { Footer } from 'components/Footer';

import { useGetLoggedUser } from 'hooks/me/useGetLoggedUser';

import { ResponseData } from 'hooks/useContracts/useCreateDocumentRequestSignaturePos/types';

import * as S from './styles';
import { PlanSection } from './Steps/PlanSection';
import { WhichNumber } from './Steps/WhichNumber';
import { ConfirmRegistrationDetails } from './Steps/ConfirmRegistrationDetails';
import { ConfirmPaymentsDetails } from './Steps/ConfirmPaymentsDetails';
import { ContractSigning } from './Steps/ContractSigning';
import { Success } from './Steps/Success';

export function TimSubscriptionPlan() {
  const currentStep = useTimPlanStore(state => state.currentStep);
  const { data: loggedUser } = useGetLoggedUser();

  const Steps = {
    0: <PlanSection />,
    1: <WhichNumber />,
    2: <ConfirmRegistrationDetails loggedUser={loggedUser} />,
    3: <ConfirmPaymentsDetails />,
    4: <ContractSigning loggedUser={loggedUser} />,
    5: <Success />,
  };

  const component = Steps[currentStep];

  return (
    <>
      <Header>
        <S.MobileLayout>
          <ShowOffers />
          <S.MarketplaceButton>Acessar o Marketplace</S.MarketplaceButton>
        </S.MobileLayout>
        <AccountCard />
      </Header>
      <HeroLayout
        imgSrc="/images/girl-with-a-phone.png"
        imgAlt="Uma mulher "
        backgroundImageUrl="/images/artBoard.svg"
      >
        <S.LeftContent>
          <Image
            src="/images/tim_logo.svg"
            alt="Logo da TIM"
            width={500}
            height={300}
          />
          <Image
            src="/images/plus.svg"
            alt="Ícone de Mais"
            width={370}
            height={107}
          />
          <Image
            src="/images/bancoUm_logo.svg"
            alt="Logo do Banco UM"
            width={500}
            height={300}
          />
        </S.LeftContent>
      </HeroLayout>
      <CenterLayout>{component} </CenterLayout>
      <Footer />
    </>
  );
}
