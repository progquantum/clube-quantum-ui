import { Controller } from 'react-hook-form'

import { Error } from 'components/Error'

import * as S from './styles'
import { InputProps } from './types'

export function Input ({ label, control, name, ...rest }: InputProps) {
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
