import { toast } from 'react-toastify';

const Toast = {
  success: (message) => {
    toast.success(message);
  },
  info: (message) => {
    toast.info(message);
  },
  warning: (message) => {
    toast.warning(message);
  },
  error: (message) => {
    toast.error(message);
  },
};

export default Toast;
