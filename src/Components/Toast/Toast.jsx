// import { Slide, toast, Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Toast({ msg, type }) {
//   return toast(msg, {
//     position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     transition: Zoom,
//     progress: undefined,
//     type: type,
//     theme: "light",
//   });
// }

// export { Toast };
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};