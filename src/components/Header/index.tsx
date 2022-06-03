import Image from 'next/image'

import * as S from './styles'

export function Header () {
  return (
    <S.Container>
      <Image width={53} height={70} src='/images/quantum-logo.svg' alt='Quantum logo' />
    </S.Container>
  )
}
