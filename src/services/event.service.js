import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class EventService {
  static async getEvents(params) {
    const { data } = await axios.get(`${config.apiUri}/api/event`, { headers, params });
    return data;
  }
}

export default EventService;
