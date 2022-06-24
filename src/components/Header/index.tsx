import Image from 'next/image'

import { useAuthDispatch } from 'contexts/auth/AuthContext'

import { Button } from 'components/Button'

import { AccountDropdown } from './AccountDropdown'
import { Gradient } from './Gradient'
import { CONTAINER_ANIMATION, NAVS_ANIMATION } from './animations'
import * as S from './styles'

export function Header () {
  const { signOut } = useAuthDispatch()

  return (
    <S.AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial='unMounted'
      animate='mounted'
      exit='unMounted'
    >
      <S.Wrapper>
        <S.AnimatedLeftNav variants={NAVS_ANIMATION}>
          <Image src='/images/quantum-logo.svg' width={60} height={60} onClick={signOut} />
        </S.AnimatedLeftNav>

        <S.AnimatedRightNav variants={NAVS_ANIMATION}>
          <Button variant='secondary'>Convidar Amigos</Button>
          <AccountDropdown />
        </S.AnimatedRightNav>
      </S.Wrapper>
      <Gradient />
    </S.AnimatedContainer>
  )
}
