import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'components/Button'

import * as S from './styles'

export function InviteFriendsError () {
  return (
    <>
      <S.Container>
        <S.Content>
          <h2>Oops, este convite parece ter expirado ou nunca existiu!</h2>
          <Link href='/'><Button>Retornar à página principal</Button></Link>
        </S.Content>
        <S.Image>
          <Image width={385} height={286} src='/images/expired.svg' />
        </S.Image>
      </S.Container>
    </>
  )
}
