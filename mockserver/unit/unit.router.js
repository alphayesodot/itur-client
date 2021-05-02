import express from 'express';
import UnitManager from './unit.manager.js';

const unitRouter = express.Router();

unitRouter.get('/', UnitManager.getUnits);

export default unitRouter;
