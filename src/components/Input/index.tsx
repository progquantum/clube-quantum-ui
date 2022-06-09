import * as S from './styles'
import { InputProps } from './types'

export function Input ({
  label, errors, isDirty, ...props
}: InputProps) {
  const icon = errors?.type === 'required' ? <S.Exclamation /> : <S.Error />

  return (
    <S.StyledInput isDirty={isDirty} errors={errors}>
      <input {...props} />
      <label htmlFor={props.id}>{label}</label>

      {errors && (
        <span>
          {errors.message}
          {icon}
        </span>
      )}
    </S.StyledInput>
  )
}
