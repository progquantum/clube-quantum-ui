import { useController } from 'react-hook-form'

import { Error } from 'components/Error'

import { InputProps } from './types'
import * as S from './styles'

export function Input ({ label, control, name, ...rest }: InputProps) {
  const { field, fieldState } = useController({ control, name })

  return (
    <S.Container>
      <S.Input
        isDirty={fieldState.isDirty}
        hasError={fieldState.error}
        ref={field.ref}
        {...field}
        {...rest}
      />

      <S.Label
        isDirty={fieldState.isDirty}
      >
        {label}
      </S.Label>

      {fieldState.error && <Error error={fieldState.error.message} />}
    </S.Container>
  )
}
