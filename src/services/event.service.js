import axios from 'axios';
import config from '../appConf';

class EventService {
  static async getEvents(params) {
    const { data } = await axios.get(`${config.apiUri}/api/event`, { headers, params });
    return data;
  }

  static async getEventById(id) {
    const { data } = await axios.get(`${config.apiUri}/api/event/${id}`, { headers, params });
    return data;
  }
}

export default EventService;
