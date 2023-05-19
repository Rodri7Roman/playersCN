import Swal from 'sweetalert2'

const ToastError = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    background: "#b82116",
    color: "#fff",
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export default ToastError