import express from 'express';
import events from './db.js';

const eventRouter = express.Router();

eventRouter.get('/', (req, res) => {
  const { date, interviewerId } = req.query;
  res.send(events.filter((event) => {
    if (date) {
      const eventDate = new Date(event.time);
      const filterDate = new Date(date);
      eventDate.setHours(0, 0, 0, 0);
      filterDate.setHours(0, 0, 0, 0);
      if (eventDate.getTime() !== filterDate.getTime()) {
        return false;
      }
    }
    if (interviewerId && !event.interviewersIds.includes(interviewerId)) {
      return false;
    }
    return true;
  }));
});

eventRouter.get('/:id', (req, res) => {
  res.send(events.find((event) => event.id === req.params.id));
});

export default eventRouter;
