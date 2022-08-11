
import { useEffect } from 'react'

import { ModalProps } from './types'
import * as S from './styles'

export function Modal ({ isActive, close, children, width }: ModalProps) {
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isActive ? 'hidden' : 'auto'
  }, [isActive])

  return (
    <>
      {isActive
        ? (
          <>
            <S.Container onClick={close} />
            <S.ModalBox width={width}>
              {children}
            </S.ModalBox>
          </>
          )
        : (
          <></>
          )}
    </>
  )
}
