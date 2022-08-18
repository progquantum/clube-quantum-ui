
import { useEffect } from 'react'

import { ModalProps } from './types'
import * as S from './styles'

export function Modal ({ isActive, onClose, children, width }: ModalProps) {
  /* useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isActive ? 'hidden' : 'auto'
  }, [isActive]) */

  return (
    <>
      {isActive
        ? (
          <>
            <S.Container onClick={onClose} />
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
