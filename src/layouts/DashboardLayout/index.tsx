import { PropsWithChildren } from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { SideBar } from 'components/SideBar';
import { ServicesBank } from 'components/ServicesBank';

import { Props } from './types';
import * as S from './styles';

export function DashboardLayout({ children, withServiceBank = true }: Props) {
  return (
    <>
      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          {withServiceBank ? <ServicesBank /> : null}
          {children}
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
