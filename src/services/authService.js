import api from "./apis/api";
import storage from "./storage";
import { hydrateLogin } from "./transformers/authTransformer";

const TOKEN = "token";

class AuthService {
  getDetail() {
    return api.auth.getDetail();
  }
  postLogIn(formData) {
    return api.auth.postLogIn(formData).then(hydrateLogin);
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

  getToken() {
    return storage.get(TOKEN);
  }
  setToken(value) {
    storage.set(TOKEN, value);
  }
  removeToken() {
    storage.remove(TOKEN);
  }
}

export default new AuthService();
