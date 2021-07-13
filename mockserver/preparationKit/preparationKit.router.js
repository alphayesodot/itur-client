import express from 'express';
import PreparationKitManager from './preparationKit.manager.js';

const preparationKitRouter = express.Router();

preparationKitRouter.get('/:fileName', PreparationKitManager.getFile);

export default preparationKitRouter;
