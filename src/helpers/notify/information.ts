import { toast } from 'react-hot-toast';

export function information(message: string) {
  toast(message, {
    position: 'top-right',
  });
}
