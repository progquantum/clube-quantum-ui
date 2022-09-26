import { toast } from 'react-toastify';

export function error(message: string) {
  toast(message, {
    type: 'error',
    position: toast.POSITION.TOP_RIGHT,
    className: 'toast-error',
    progressClassName: 'error-progress-bar',
    autoClose: 4000,
  });
}
