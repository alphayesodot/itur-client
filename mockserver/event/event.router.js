import express from 'express';
import events from './db.js';

const eventRouter = express.Router();

eventRouter.get('/', (req, res) => {
  const { date, interviewerId } = req.query;
  res.send(events.filter((event) => {
    if (date && new Date(event.date).getTime() >= new Date().getTime(date)) {
      return false;
    }
    if (interviewerId && !event.interviewersIds.includes(interviewerId)) {
      return false;
    }
    return true;
  }));
});

eventRouter.get('/:id', (req, res) => {
  res.send(events.find((event) => event._id === req.params.id));
});

export default eventRouter;
