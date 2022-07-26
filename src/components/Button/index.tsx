import { PropsWithChildren } from 'react'
import { PulseLoader } from 'react-spinners'

import { Loading } from 'components/Loading'

import { ButtonProps } from './types'

import * as S from './styles'

export function Button ({
  children,
  loading,
  type,
  variant,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <S.Container type={type || 'button'} variant={variant} {...rest}>
      {
       loading
         ? (
           <Loading icon={PulseLoader} color='var(--shape)' size={10} />
           )
         : (
             children
           )
      }
    </S.Container>
  )
}
