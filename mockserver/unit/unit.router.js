import express from 'express';
import units from './db.js';

const unitRouter = express.Router();

unitRouter.get('/:id', (req, res) => {
  res.send(units.find((unit) => unit._id === req.params.id));
});

export default unitRouter;
