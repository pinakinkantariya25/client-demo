import api from "./apis/api";
import storage from "./storage";

const USERID = "userId";

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
  changePassword(formData) {
    return api.auth.changePassword(formData);
  }

  getUserId() {
    return storage.get(USERID);
  }
  setUserId(value) {
    storage.set(USERID, value);
  }
  removeUserId() {
    storage.remove(USERID);
  }
}

export default new AuthService();
