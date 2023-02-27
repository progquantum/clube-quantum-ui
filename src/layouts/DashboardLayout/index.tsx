import { PropsWithChildren } from 'react';

import { Footer } from 'components/Footer';

import { SideBar } from 'components/SideBar';
import { ServicesBank } from 'components/ServicesBank';

import { HeaderAuth } from 'components/Header/HeaderAuth';
import { Props } from './types';
import * as S from './styles';

export function DashboardLayout({ children, withServiceBank = true }: Props) {
  return (
    <>
      <HeaderAuth />
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
