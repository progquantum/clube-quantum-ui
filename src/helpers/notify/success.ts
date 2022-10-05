import { toast } from 'react-hot-toast';

export function success(message: string) {
  toast.success(message, {
    position: 'top-right',
    className: 'toast-success',
  });
}
