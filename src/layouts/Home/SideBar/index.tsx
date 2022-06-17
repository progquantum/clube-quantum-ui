import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
      <S.Container>
        <Link href='/'>
          <Image width={38} height={55} src='/images/quantum-logo.svg' alt='Club Quantum logo' />
        </Link>

        {!isOpenSideBar
          ? (
            <Image
              width={28}
              height={20}
              src='/images/open-sidebar.png'
              alt='Abrir sidebar'
              onClick={handleOpenMenu}
            />
            )
          : (
            <Image
              width={21}
              height={21}
              src='/images/close-sidebar.png'
              alt='Abrir sidebar'
              onClick={handleCloseMenu}
            />
            )}
      </S.Container>

      <S.Menu isOpenedSideBar={isOpenSideBar}>
        {(isOpenSideBar && isShowContent) && (
          <>
            <S.Nav>
              <Link href='/'>Saiba Mais</Link>
              <Link href='/'>Seja um parceiro</Link>
              <Link href='/'>Central de dúvidas</Link>
            </S.Nav>

            <S.Box>
              <p>
                Olá, faça seu <Link href='/signin'>Login</Link>{' '}
                ou <Link href='/signup/personal' passHref>Cadastre-se </Link>
              </p>
            </S.Box>
          </>
        )}
      </S.Menu>
    </>
  )
}
