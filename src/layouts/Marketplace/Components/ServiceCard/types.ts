import { ReactNode } from 'react';

export type Props = {
  height?: string;
  isDisabled?: boolean;
};

export type ServiceCardProps = {
  children: ReactNode;
  height?: string;
  isDisabled?: boolean;
  innerText?: string;
};
