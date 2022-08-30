import { Slide, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast({ msg, type }) {
  return toast(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Zoom,
    progress: undefined,
    type: type,
    theme: "light",
  });
}

export { Toast };