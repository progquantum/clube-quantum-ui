import { PropsWithChildren } from 'react';

import { Footer } from 'components/Footer';

import { SideBar } from 'components/SideBar';
import { ServicesBank } from 'components/ServicesBank';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import * as S from './styles';

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeaderAuth />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <ServicesBank />
          {children}
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
