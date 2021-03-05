import api from "./apis/api";
class AuthService {
  getDetail() {
    return api.auth.getDetail();
  }
}

export default new AuthService();
