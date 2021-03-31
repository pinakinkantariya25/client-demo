import * as actionTypes from "./actionTypes";
import authService from "../services/authService";
import {
  dehydrateSignIn,
  dehydrateForgotPassword,
  dehydrateResetPassword,
  hydrateLogin,
} from "../services/transformers/authTransformer";
import { customToast } from "../helpers/customToast";
import history from "../history";

const startLogin = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

const successLogin = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
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
    .postLogIn(dehydrateSignIn(formProps))
    .then((res) => {
      dispatch(successLogin(res));
      authService.setToken(res.token);
      history.push("/");
    })
    .catch((err) => {
      dispatch(loginError(err));
      if (err.response) {
        customToast.error(err.response.data.message);
        return;
      }
      customToast.error("Something went wrong!");
    });
};

const startResetPassword = () => {
  return {
    type: actionTypes.RESET_PASSWORD_START,
  };
};

const successResetPassword = () => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
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
      dispatch(successResetPassword());
      customToast.success("Your password has been updated successfully.");
      history.push("/sign-in");
    })
    .catch((err) => {
      dispatch(resetPasswordError());
      if (err.response) {
        customToast.error(err.response.data.message);
        return;
      }
      customToast.error("Something went wrong!");
    });
};

export const forgotPassword = (formProps) => async (dispatch) => {
  return authService
    .postForgotPassword(dehydrateForgotPassword(formProps))
    .then((res) => {
      customToast.success(
        "We have sent a link to reset your password. please Check Mail"
      );
      return res;
    })
    .catch((e) => {
      if (e.response) {
        customToast.error(e.response.data.message);
        throw e;
      }
      customToast.error("Something went wrong!");
      throw e;
    });
};
export const changePassword = (formProps) => async (dispatch) => {
  return authService
    .changePassword(formProps)
    .then((res) => {
      customToast.success("Change Password  successfully!");
      return res;
    })
    .catch((e) => {
      if (e.response) {
        customToast.error(e.response.data.message);
        throw e;
      }
      customToast.error("Something went wrong!");
      throw e;
    });
};
export const signOut = () => {
  authService.removeToken();
  history.push("/sign-in");
  return {
    type: actionTypes.SIGN_OUT,
  };
};
