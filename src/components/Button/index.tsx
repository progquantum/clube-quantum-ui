import { PropsWithChildren } from 'react'
import { PulseLoader } from 'react-spinners'

import { Loading } from 'components/Loading'

import { ButtonProps } from './types'

import * as S from './styles'

export function Button ({
  children,
  loading,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <S.Container {...rest}>
      {loading
        ? (
          <Loading icon={PulseLoader} color='var(--shape)' size={10} />
          )
        : (
            children
          )}
    </S.Container>
  )
}
