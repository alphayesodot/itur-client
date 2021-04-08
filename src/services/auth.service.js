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
      let user = null;
      await axios.get(`${config.uri.auth}/currentUser`)
        .then((res) => {
          user = res.data;
        });
      return user;
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
