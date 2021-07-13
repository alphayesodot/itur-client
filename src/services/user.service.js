import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const Role = {
  Interviewer: 'INTERVIEWER',
  RamadIturOfUnit: 'RAMAD_ITUR_OF_UNIT',
  RamadIturAssistant: 'RAMAD_ITUR_ASSISTANT',
  ProfessionalRamad: 'PROFESSIONAL_RAMAD',
  Mada: 'MADA',
  Itur: 'ITUR',
  Psychologist: 'PSYCHOLOGIST',
  Diagnoser: 'DIAGNOSER',
  Technical: 'TECHNICAL',
  Malshab: 'MALSHAB',
};

export default class UserService {
  static async getUserById(id) {
    const { data } = await axios.get(`${config.apiUri}/api/user/${id}`, { headers });
    return data;
  }
  static async getUsers(params) {
    const res = await axios.get(`${await config.apiUri}/api/user/`, { headers, params });
    return res?.data;
  }
  static async createUser(userToAdd) {
    const res = await axios.post(`${await config.apiUri}/api/user/`, userToAdd, { headers });
    return res?.data;
  }
  static async getUsersByRoles(roles) {
    const res = await axios.post(`${await config.apiUri}/api/user/role`, { roles }, { headers });
    return res?.data;
  }
}
