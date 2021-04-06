/* eslint-disable no-param-reassign */
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
      return jwt.decode(cookie).user;
    }
  }

  static async setAuthHeaders() {
    axios.interceptors.request.use((requestsConfig) => {
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
    window.location.replace(`${config.uri.auth_service_uri}auth/login`);
  }
}

export default AuthService;
