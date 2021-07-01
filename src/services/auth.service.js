/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../appConf';

class AuthService {
  static async getAuthUser() {
    const cookie = Cookies.get(config.tokenName);
    if (!cookie) {
      this.redirect();
    } else if (jwt.verify(cookie, config.secret)) {
      this.setAuthHeaders();
      return jwt.decode(cookie);
    }
  }

  static async setAuthHeaders() {
    axios.interceptors.request.use((value) => {
      const requestsConfig = value;
      const token = Cookies.get(config.tokenName);
      if (!token) {
        this.redirect();
      } else {
        requestsConfig.headers.Authorization = `Bearer ${token}`;
        // TODO: In case the malshab using this client,
        // send a different header depends on the authorized user
        requestsConfig.headers['Requester-Type'] = 'USER';
        return requestsConfig;
      }
    });
  }

  static async redirect() {
    window.location.replace('/login');
    // TODO: Comment on push
    // window.location.replace('http://localhost:8080/login/1');
  }
}

export default AuthService;
