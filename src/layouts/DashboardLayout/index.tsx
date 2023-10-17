import { SideBar } from 'components/SideBar';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import { Footer } from 'components/Footer';

import { Props } from './types';
import * as S from './styles';

export function DashboardLayout({ children, maxWidth }: Props) {
  return (
    <>
      <HeaderAuth />
      <S.Container maxWidth={maxWidth}>
        <SideBar />
        <S.RightWrapper>{children}</S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
