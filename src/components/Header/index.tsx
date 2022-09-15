import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'components/Button'
import { INVITE_FRIENDS_PAGE } from 'constants/routesPath'

import { AccountDropdown } from './AccountDropdown'
import * as S from './styles'

export function Header () {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftNav>
          <Image src='/images/quantum-logo.svg' width={60} height={60} />
        </S.LeftNav>

        <S.RightNav>
          <Link href={INVITE_FRIENDS_PAGE}>
            <Button variant='secondary'>
              Convidar Amigos
            </Button>
          </Link>
          <AccountDropdown />
        </S.RightNav>
      </S.Wrapper>
    </S.Container>
  )
}
