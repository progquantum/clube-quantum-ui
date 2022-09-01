import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { SIGN_IN_PAGE } from 'constants/routesPath'

import * as S from './styles'

export function SideBar () {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)
  const [isShowContent, setIsShowContent] = useState(false)

  const handleOpenMenu = () => {
    setIsOpenSideBar(true)

    setTimeout(() => {
      setIsShowContent(true)
    }, 300)
  }

  const handleCloseMenu = () => {
    setIsOpenSideBar(false)
    setIsShowContent(false)
  }

  return (
    <>
      <S.Shadow>
        <S.Container>
          <Link href='/'>
            <Image width={38} height={55} src='/images/quantum-logo.svg' alt='Club Quantum logo' />
          </Link>

          {!isOpenSideBar
            ? (
              <Image
                width={28}
                height={20}
                src='/images/open-menu.svg'
                alt='Abrir sidebar'
                onClick={handleOpenMenu}
              />
              )
            : (
              <Image
                width={21}
                height={21}
                src='/images/close-menu.svg'
                alt='Abrir sidebar'
                onClick={handleCloseMenu}
              />
              )}
        </S.Container>
      </S.Shadow>
      <S.Menu isOpenedSideBar={isOpenSideBar}>
        {(isOpenSideBar && isShowContent) && (
          <S.Nav>
            <Link href='/'>Saiba Mais</Link>
            <S.Line />
            <Link href='/'>Seja um parceiro</Link>
            <S.Line />
            <Link href='/'>Central de dúvidas</Link>
            <S.Line />
            <Link href={SIGN_IN_PAGE}>
              <S.LoginButton>Fazer Login</S.LoginButton>
            </Link>
          </S.Nav>
        )}
      </S.Menu>
    </>
  )
}
