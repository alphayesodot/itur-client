import axios from 'axios';
import userStoreInstance from '../stores/User.store';
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

  static async getEventById(id) {
    const { data } = await axios.get(`${config.apiUri}/api/event/${id}`, { headers });
    return data;
  }

  static async addEventNote(eventId, note) {
    const { data } = await axios.post(`${config.apiUri}/api/event/${eventId}/results`, {
      results: { notes: [{ wroteBy: userStoreInstance.userProfile.userID, note }] },
    });
    return data;
  }
}

export default EventService;
