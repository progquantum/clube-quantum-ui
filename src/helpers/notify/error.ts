import { toast } from 'react-hot-toast';

export function error(message: string, duration?: number) {
  toast.error(message, {
    position: 'top-right',
    duration,
    className: 'toast-error',
  });
}
