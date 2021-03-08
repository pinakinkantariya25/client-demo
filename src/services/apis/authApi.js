import api from "./api";

export default class AuthAPI {
  getDetail() {
    return api.get("/todos/1");
  }
  postFormData(formData) {
    return api.post('/posts', formData);
  }
}