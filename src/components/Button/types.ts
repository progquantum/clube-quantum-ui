import { ButtonHTMLAttributes } from 'react'

export type ButtonVariants = 'secondary' | 'secondary_degrade' | 'transparent' | 'rounded' | 'danger_outline' | 'primary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants
  background?: string
  color?: string
  loading?: boolean
};
