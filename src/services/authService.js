import api from "./apis/api";
class AuthService {
  getDetail() {
    return api.auth.getDetail();
  }
  postLogIn(formData) {
    return api.auth.postLogIn(formData);
  }
  postForgotPassword(formData) {
    return api.auth.postForgotPassword(formData);
  }
  postResetPassword(formData) {
    return api.auth.postResetPassword(formData);
  }
}

export default new AuthService();
