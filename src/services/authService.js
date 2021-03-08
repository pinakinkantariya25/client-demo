<<<<<<< HEAD
import api from "./apis/api";
class AuthService {
  getDetail() {
    return api.auth.getDetail();
  }
}

export default new AuthService();
=======
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
>>>>>>> api-redux
