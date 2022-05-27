import { Error, Exclamation, StyledInput } from './styles'
import { InputProps } from './types'

export function Input ({
  label, errors, isDirty, secondary, ...props
}: InputProps) {
  const icon = errors?.type === 'required' ? <Exclamation /> : <Error />

  return (
    <StyledInput isDirty={isDirty} errors={errors} secondary={secondary}>
      <input {...props} />
      <label htmlFor={props.id}>{label}</label>
      {errors && (
        <span>
          {errors.message}
          {icon}
        </span>
      )}
    </StyledInput>
  )
}
