import Image from 'next/image';
import Link from 'next/link';

import { AccountCard } from './Components/AccountCard';
import { ShowOffers } from './Components/ShowOffers';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftNav>
          <Link href="/">
            <Image src="/images/quantum-logo.svg" width={60} height={60} />
          </Link>
        </S.LeftNav>
        <S.RightNav>
          <ShowOffers />
          <AccountCard />
        </S.RightNav>
      </S.Wrapper>
    </S.Container>
  );
}
