import * as actionTypes from "./actionTypes";
import authService from "../services/authService";
import {dehydrateSignIn} from '../services/transformers/authTransformer';
import { toast } from "react-toastify";
import CloseIcon from '../components/common/CloseIcon';
import {commonMessages} from '../constants/commonMessages';

const startLogin = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

const successLogin = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data.data,
  };
};

const loginError = (error) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: error,
  };
};

export const logIn = (formProps) => async (dispatch) => {
  dispatch(startLogin());
  authService
    .postFormData(dehydrateSignIn(formProps))
    .then((res) => {
      dispatch(successLogin(res));
      // localStorage.setItem("token", res);
    })
    .catch((err) => {
      dispatch(loginError(err));
    });
};

const startResetPassword = () => {
  return {
    type: actionTypes.RESET_PASSWORD_START,
  };
};

const successResetPassword = (data) => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    payload: data.data,
  };
};

const resetPasswordError = (error) => {
  return {
    type: actionTypes.RESET_PASSWORD_ERROR,
    payload: error,
  };
};

export const resetPassword = (formProps) => async (dispatch) => {
  dispatch(startResetPassword());
  authService
    .postFormData(formProps)
    .then((res) => {
      dispatch(successResetPassword(res));
      toast("Your password has been updated successfully.", {
        closeButton: CloseIcon,
        className: commonMessages.success,
      });
      // localStorage.setItem("token", res);
    })
    .catch((err) => {
      dispatch(resetPasswordError(err));
    });
};