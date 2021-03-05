import axios from "axios";
import AuthAPI from "./authApi";

const BASEURL = "https://jsonplaceholder.typicode.com";

class API {
  __auth = new AuthAPI();

  api = axios.create({
    baseURL: BASEURL,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  get auth() {
    return this.__auth;
  }

  get(url, ...args) {
    return this.sendRequestInternal(this.api.get, url, ...args);
  }

  post(url, ...args) {
    return this.sendRequestInternal(this.api.post, url, ...args);
  }

  patch(url, ...args) {
    return this.sendRequestInternal(this.api.patch, url, ...args);
  }

  sendRequestInternal(requestFunc, url, ...args) {
    return requestFunc(url, ...args);
  }
}

export default new API();
