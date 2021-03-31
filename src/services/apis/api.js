import axios from "axios";
import AuthAPI from "./authApi";
import storage from "../storage";

const BASEURL = "https://api.v-site.xyz/api/v1";

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
    const token = storage.get("token");
    if (token) {
      this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return requestFunc(url, ...args).then(
      (response) => response.data && response.data.data
    );
  }
}

export default new API();
