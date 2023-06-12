import Link from 'next/link';

import { useWindowSize } from 'react-use';

import { WORK_WITH_US_PAGE, SIGN_IN_PAGE } from 'constants/routesPath';

import { Header } from '..';

import * as S from './styles';
import { SideBarMobileGuest } from './SidebarMobileGuest';

export function HeaderGuest() {
  const { width } = useWindowSize();
  return (
    <S.BoxContainer>
      <Header>
        {width <= 600 ? (
          <SideBarMobileGuest key="sidebarMobileGuest" />
        ) : (
          <S.Nav>
            <Link href="/">Saiba mais</Link>
            <Link href="/">Seja um parceiro</Link>
            <Link href={WORK_WITH_US_PAGE}>Trabalhe Conosco</Link>
            <Link href={SIGN_IN_PAGE}>
              <S.LoginButton>Fazer Login</S.LoginButton>
            </Link>
          </S.Nav>
        )}
      </Header>
    </S.BoxContainer>
  );
}
