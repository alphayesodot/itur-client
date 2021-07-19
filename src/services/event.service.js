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
    const { data } = await axios.get(`${config.apiUri}/api/event/${id}`);
    return data;
  }

  static async addEventNote(eventId, note) {
    const { data } = await axios.post(`${config.apiUri}/api/event/${eventId}/results`, {
      result: note ? { notes: [{ wroteBy: userStoreInstance.userProfile.id, note }] } : {},
    });
    return data;
  }
  static async addInterviewer(eventId, interviewerId) {
    const { data } = await axios.post(`${config.apiUri}/api/event/${eventId}/user/${interviewerId}`, { headers });
    return data;
  }
  static async removeInterviewer(eventId, interviewerId) {
    const { data } = await axios.delete(`${config.apiUri}/api/event/${eventId}/user/${interviewerId}`, { headers });
    return data;
  }
}

export default EventService;
