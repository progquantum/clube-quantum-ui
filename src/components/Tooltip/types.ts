import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

export type TooltipProps = {
  title: string;
  classname?: string;
  icon: ComponentType<IconBaseProps>;
};
