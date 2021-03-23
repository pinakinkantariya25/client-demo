import * as actionTypes from "./actionTypes";
import authService from "../services/authService";
import {dehydrateSignIn, dehydrateForgotPassword, dehydrateResetPassword} from '../services/transformers/authTransformer';
import { toast } from "react-toastify";
import CloseIcon from '../components/common/CloseIcon';
import {commonMessages} from '../constants/commonMessages';
import history from '../history';

const startLogin = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

const successLogin = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data.userId,
  };
};

const loginError = (error) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: error
  };
};

export const logIn = (formProps) => async (dispatch) => {
  dispatch(startLogin());
  authService
    .postLogIn(dehydrateSignIn(formProps))
    .then((res) => {
      dispatch(successLogin(res.data.data));
      localStorage.setItem("userId", res.data.data.userId);
      history.push('/');
    })
    .catch((err) => {
      dispatch(loginError(err));
      if (err.response) {
        toast(err.response.data.message, {
          closeButton: CloseIcon,
          className: commonMessages.error,
        });
        return;
      }
      toast('Something went wrong!', {
        closeButton: CloseIcon,
        className: commonMessages.error,
      });
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
    payload: data,
  };
};

const resetPasswordError = () => {
  return {
    type: actionTypes.RESET_PASSWORD_ERROR,
  };
};

export const resetPassword = (formProps) => async (dispatch) => {
  dispatch(startResetPassword());
  authService
    .postResetPassword(dehydrateResetPassword(formProps))
    .then((res) => {
      dispatch(successResetPassword(formProps.userId));
      toast("Your password has been updated successfully.", {
        closeButton: CloseIcon,
        className: commonMessages.success,
      });
      localStorage.setItem("userId", formProps.userId);
      history.push('/');
    })
    .catch((err) => {
      dispatch(resetPasswordError());
      if (err.response) {
        toast(err.response.data.message, {
          closeButton: CloseIcon,
          className: commonMessages.error,
        });
        return;
      }
      toast('Something went wrong!', {
        closeButton: CloseIcon,
        className: commonMessages.error,
      });
    });
};

export const forgotPassword = (formProps) => async (dispatch) => {
  return authService
    .postForgotPassword(dehydrateForgotPassword(formProps))
    .then(res => {
      toast("We have sent a link to reset your password. please Check Mail", {
        closeButton: CloseIcon,
        className: commonMessages.success,
      });
      return res;
    }).catch(e => {
      if (e.response) {
        toast(e.response.data.message, {
          closeButton: CloseIcon,
          className: commonMessages.error,
        });
        throw e;
      }
      toast('Something went wrong!', {
        closeButton: CloseIcon,
        className: commonMessages.error,
      });
      throw e;
    });
};