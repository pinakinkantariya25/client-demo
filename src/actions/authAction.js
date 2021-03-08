import * as actionTypes from "./actionTypes";
import {setSnackbar} from './snackBarAction';
import authService from "../services/authService";
import {dehydrateSignIn} from '../services/transformers/authTransformer';

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
      dispatch(
        setSnackbar(
          true,
          { vertical: 'top', horizontal: 'center' },
          "success",
          "Your password has been updated successfully."
        )
      )
      // localStorage.setItem("token", res);
    })
    .catch((err) => {
      dispatch(resetPasswordError(err));
    });
};