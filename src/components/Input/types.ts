import { InputHTMLAttributes } from 'react'
import { Control, FieldError } from 'react-hook-form'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  control: Control<any, any>
  name: string
}

export type LabelProps = {
  isDirty: boolean
}

export type InputComponentProps = {
  error: FieldError
  isDirty: boolean
}
