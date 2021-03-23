import api from "./api";

export default class AuthAPI {
  getDetail() {
    return api.get("/todos/1");
  }
  postLogIn(formData) {
    return api.post('/user/login', formData);
  }
  postForgotPassword(formData) {
    return api.post('/user/forgot-password', formData);
  }
  postResetPassword(formData) {
    return api.post('/user/reset-password', formData);
  }
}