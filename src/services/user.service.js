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
    const { data } = await axios.get(`${config.apiUri}/api/user/${id}`, { headers });
    return data;
  }
  static async getUsersByUnitId(unitId) {
    const res = await axios.get(`${await config.apiUri}/api/user/`, { headers, params: { unitId } });
    return res?.data;
  }
  static async createUser(unitId, role, name) {
    const res = await axios.post(`${await config.apiUri}/api/user/`, { unitId, role, name }, { headers });
    return res?.data;
  }
}
