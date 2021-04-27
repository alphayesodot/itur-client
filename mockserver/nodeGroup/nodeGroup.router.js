import express from 'express';
import nodeGroups from './db.js';

const nodeGroupRouter = express.Router();

nodeGroupRouter.get('/', (req, res) => {
  // const { date, malshabId, interviewerId, nodeId } = req.query;
  const { date } = req.query;
  res.send(nodeGroups.filter((event) => {
    if (date && new Date(event.date).getTime() >= new Date().getTime(date)) {
      return false;
    }
    return true;
  }));
});

export default nodeGroupRouter;
