import express from 'express';
import UnitManager from './unit.manager';

const unitRouter = express.Router();

unitRouter.get('/unit', UnitManager.getUnits);

export default unitRouter;
