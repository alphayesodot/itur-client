import express from 'express';
import UnitManager from './unit.manager.js';
import units from './db.js';

const unitRouter = express.Router();

unitRouter.get('/', UnitManager.getUnits);
unitRouter.post('/', UnitManager.createUnit);

unitRouter.get('/:id', (req, res) => {
  res.send(units.find((unit) => unit._id === req.params.id));
});

export default unitRouter;
