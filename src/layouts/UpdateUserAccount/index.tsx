import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { SideBar } from 'components/SideBar';
import { ServicesBank } from 'components/ServicesBank';

import { UploadAvatar } from './Avatar';
import { Profile } from './Profile';
import { Address } from './Address';
import { Password } from './Password';
import * as S from './styles';

export function UpdateUserAccountPage() {
  return (
    <>
      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <ServicesBank />
          <S.MenuGrid />
          <S.ColumnGrid>
            <S.FLex>
              <UploadAvatar />
              <Address />
            </S.FLex>
            <S.FLex>
              <Profile />
              <Password />
            </S.FLex>
          </S.ColumnGrid>
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
