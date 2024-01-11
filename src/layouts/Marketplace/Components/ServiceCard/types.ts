import { ReactNode } from 'react';

export type Props = {
  height?: string;
  isDisabled?: boolean;
  definedTheme?: string;
};

export type ServiceCardProps = {
  children: ReactNode;
  height?: string;
  isDisabled?: boolean;
  definedTheme?: string;
  innerText?: string;
};
