import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants =
  | 'secondary'
  | 'secondary_degrade'
  | 'transparent'
  | 'rounded'
  | 'danger'
  | 'danger_outline';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
  loading?: boolean;
};
