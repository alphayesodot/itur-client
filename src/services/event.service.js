import axios from 'axios';
import config from '../appConf';

class EventService {
  static async getEventById(eventId) {
    const { data } = await axios({
      method: 'GET',
      url: `${await config.uri.api}/api/event/${eventId}`,
    });
    return data;
  }
}

export default EventService;
