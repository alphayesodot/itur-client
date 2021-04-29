import axios from 'axios';
import config from '../appConf';

class EventService {
  static async getEventById(eventId) {
    const res = await axios({
      method: 'GET',
      url: `${await config.uri.api}/api/event/${eventId}`,
    }).catch(() => {});
    return res?.data;
  }
}

export default EventService;
