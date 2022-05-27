import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  errors?: FieldError
  isDirty?: boolean
  secondary?: boolean
}
