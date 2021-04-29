import events from './events.js';

class EventManager {
  static async getEvents(req, res) {
    if (req.query.malshabId) {
      const [event] = events.filter((eventObj) => eventObj.malshab.id === req.query.malshabId);
      return res.send(event || 404);
    }
    return res.send(events);
  }

  static async getEventById(req, res) {
    if (events[req.params.id]) events[req.params.id].time = new Date(new Date().getTime() - 1320000);
    res.send(events[req.params.id] || 404);
  }
}

export default EventManager;
