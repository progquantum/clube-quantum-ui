import { Footer } from 'components/Footer';

import { SideBar } from 'components/SideBar';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import { Props } from './types';
import * as S from './styles';

export function DashboardLayout({ children }: Props) {
  return (
    <>
      <HeaderAuth />
      <S.Container>
        <SideBar />
        <S.RightWrapper>{children}</S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
