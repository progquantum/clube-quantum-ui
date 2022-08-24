import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export function InviteNotFoundPage () {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.ContentTitle>Oops, este convite parece ter expirado ou nunca existiu!</S.ContentTitle>
          <Link href='/'><S.BackToHomePage>Retornar à página principal</S.BackToHomePage></Link>
        </S.Content>
        <S.Image>
          <Image width={385} height={286} src='/images/expired.svg' />
        </S.Image>
      </S.Container>
    </>
  )
}
