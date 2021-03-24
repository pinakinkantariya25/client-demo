import { toast } from "react-toastify";
import {commonMessages} from '../constants/commonMessages';
import CloseIcon from '../components/common/CloseIcon';
import LoaderIcon from '../components/common/LoaderIcon';

export const customToast = {
  success: (message) => {
    toast(message, {
      closeButton: CloseIcon,
      className: commonMessages.error,
    });
  },
  error: (message) => {
    toast(message, {
      closeButton: CloseIcon,
      className: commonMessages.error,
    });
  },
  warn: (message) => {
    toast(message, {
      closeButton: CloseIcon,
      className: commonMessages.warning,
    });
  },
  uploadImg: (message) => {
    toast(<>{message}<LoaderIcon /></>, {
      className: commonMessages.uploadImg,
    });
  },
}