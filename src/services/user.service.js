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
};

export class UserService {
  static async getUserById(id) {
    const { data } = await axios.get(`${config.uri.api}/api/user/${id}`, { headers });
    return data;
  }
  static async getUsersByUnitId(unitId) {
    const res = await axios.get(`${await config.uri.api}/api/user/`, { headers, params: { unitId } });
    return res?.data;
  }

  static async createUser(unitId, role, userName) {
    const res = await axios.post(`${await config.uri.api}/api/user/`, { unitId, role, userName }, { headers });
    return res?.data;
  }
}
