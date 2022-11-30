import { PropsWithChildren } from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { SideBar } from 'components/SideBar';
import { ServicesBank } from 'components/ServicesBank';

import * as S from './styles';

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
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
