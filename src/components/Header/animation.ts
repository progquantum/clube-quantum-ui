import { DEFAULT_TRANSITION } from 'constants/animations';

export const DROP_DOWN_ANIMATION = {
  visible: {
    y: 0,
    opacity: 1,
    transition: DEFAULT_TRANSITION,
  },
  hidden: {
    y: -10,
    opacity: 0,
    transition: DEFAULT_TRANSITION,
  },
};
