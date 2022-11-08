import { SideBar } from 'components/SideBar';
import { ServicesBank } from 'components/ServicesBank';
import { Header } from 'components/Header';
import { ManagePlans } from 'components/ManagePlans';

import { useMe } from 'hooks/user/useMe';

import { MainContent } from './MainContent/Index';
import * as S from './styles';

export function DashboardPage() {
  const { data } = useMe();

  return (
    <>
      <title>Dashboard - Clube Quantum</title>

      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <ServicesBank />
          {data?.subscription ? <MainContent /> : <ManagePlans />}
        </S.RightWrapper>
      </S.Container>
    </>
  );
}
