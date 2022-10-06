import { toast } from 'react-hot-toast';

export function error(message: string) {
  toast.error(message, {
    position: 'top-right',
    className: 'toast-error',
  });
}
