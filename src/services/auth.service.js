/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../appConf';

class AuthService {
  static async getAuthUser() {
    const cookie = Cookies.get(config.token_name);
    if (!cookie) {
      this.redirect();
    } else {
      this.setAuthHeaders();
      if (jwt.verify(cookie, config.secret)) {
        return jwt.decode(cookie).user;
      }
    }
  }

  static async setAuthHeaders() {
    axios.interceptors.request.use((value) => {
      const requestsConfig = value;
      const token = Cookies.get(config.token_name);
      if (!token) {
        this.redirect();
      } else {
        requestsConfig.headers.Authorization = `Bearer ${token}`;
        return requestsConfig;
      }
    });
  }

  static async redirect() {
    // TODO: Remove user id
    window.location.replace(`${config.uri.auth}/auth/login/1`);
  }
}

export default AuthService;
