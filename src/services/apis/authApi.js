import api from "./api";
import authService from "../authService";

export default class AuthAPI {
  getDetail() {
    return api.get("/todos/1");
  }
  postLogIn(formData) {
    return api.post("/user/login", formData);
  }
  postForgotPassword(formData) {
    return api.post("/user/forgot-password", formData);
  }
  postResetPassword(formData) {
    return api.post("/user/reset-password", formData);
  }

  changePassword(formData) {
    return api.post("/user/change-password", formData);
  }
}
