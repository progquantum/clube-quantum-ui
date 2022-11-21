import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ServicesBank } from 'components/ServicesBank';
import { SideBar } from 'components/SideBar';

import * as S from './styles';

export function MyFriendsPage() {
  return (
    <>
      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <ServicesBank />
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
