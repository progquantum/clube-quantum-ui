import { ReactNode } from 'react'

export type PlansProps = {
  onUpdateFormStep?: () => void;
  titleButton?: string;
  children?: ReactNode;
}

export type Periods = 'monthly' | 'semiannual' | 'yearly'
export type Plans = 'free' | 'start' | 'select'
