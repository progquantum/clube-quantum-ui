import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode | undefined;
  withServiceBank?: boolean;
  maxWidth?: string;
};

export type ContainerProps = {
  maxWidth?: string;
};
