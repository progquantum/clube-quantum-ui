import Image from 'next/image'
import Link from 'next/link'

import { Header } from 'components/Header'

import { Footer } from 'components/Footer'

import * as S from './styles'

export function NotFoundPage () {
  return (
    <>
      <Header />

      <S.Container>
        <S.Wrapper>
          <S.Info>
            <h1>404</h1>
            <h3>Oops, página não encontrada</h3>
            <Link href='/'>Retornar à homepage</Link>
          </S.Info>
          <Image width={385} height={334} src='/images/404-not-found.png' />
        </S.Wrapper>
      </S.Container>

      <Footer />
    </>
  )
}
