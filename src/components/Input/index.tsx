import { Controller } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { Error } from 'components/Error'

import * as S from './styles'
import { InputProps } from './types'

const ImperativeInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, control, name, ...rest },
  ref
) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field,
        fieldState: { error, isDirty }
      }) => (
        <S.Container>
          <S.Input
            isDirty={isDirty}
            error={error}
            ref={ref}
            {...rest}
            {...field}
          />
          <S.Label
            isDirty={isDirty}
          >
            {label}
          </S.Label>

          {error &&
            <Error error={error.message} />}
        </S.Container>
      )}
    />
  )
}

export const Input = forwardRef(ImperativeInput)
