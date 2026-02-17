import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (message, type = "success") => {
  const options = {
    position: "top-left",  
    autoClose: 1000,         
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  switch (type) {

    case "success":
      toast.success(message,options);

      break;
    case "error":
      toast.error(message,options);
      break;
    case "info":
      toast.info(message,options);
      break;
    case "warning":
      toast.warning(message,options);
      break;
    default:
      toast(message,options);
  }
};
export { notify };