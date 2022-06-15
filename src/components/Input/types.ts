import { InputHTMLAttributes } from 'react'
import { Control } from 'react-hook-form'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  control: Control<any, any>
  name: string
}
