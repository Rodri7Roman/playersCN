import Swal from "sweetalert2";
const ToastSuccess = Swal.mixin({
  toast: true,
  position: "top-end",
  width: "300",
  padding: "2em",
  color: "var(--color-blue-light)",
  customClass: {
    title: "title-alert",
  },
  showConfirmButton: false,
  timer: 800,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default ToastSuccess;
