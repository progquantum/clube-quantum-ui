import Swal from 'sweetalert2';

export function modalDelete(title: string, text: string) {
  return Swal.fire({
    title,
    text,
    showCancelButton: true,
    showCloseButton: true,
    buttonsStyling: false,
    /* confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33', */
    icon: 'warning',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sim, remover',
    customClass: {
      title: 'sweetTitle',
      confirmButton: 'sweetConfirmButton',
      cancelButton: 'sweetCancelButton',
      container: 'sweetContainer',
    },
  });
}
