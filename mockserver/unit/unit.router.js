import express from 'express';
import UnitManager from './unit.manager.js';

const unitRouter = express.Router();

unitRouter.get('/', UnitManager.getUnits);
unitRouter.post('/', UnitManager.createUnit);
unitRouter.get('/:id', UnitManager.getUnitById);

export default unitRouter;
