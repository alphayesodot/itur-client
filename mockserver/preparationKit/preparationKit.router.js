import express from 'express';
import PreparationKitManager from './preparationKit.manager.js';

const preparationKitRouter = express.Router();

preparationKitRouter.get('/pdf', PreparationKitManager.getPDF);
preparationKitRouter.get('/video', PreparationKitManager.getVideo);
preparationKitRouter.get('/:fileName', PreparationKitManager.getFile);

export default preparationKitRouter;
