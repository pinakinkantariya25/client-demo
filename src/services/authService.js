import api from "./apis/api";
class AuthService {
  getDetail() {
    return api.auth.getDetail();
  }
  postFormData(formData) {
    return api.auth.postFormData(formData);
  }
}

export default new AuthService();
