import express from 'express';
import events from './db.js';

const eventRouter = express.Router();

eventRouter.get('/', (_req, res) => {
  res.send(events);
});

export default eventRouter;
