import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { buildJwtById, buildJwtByRole } from './authentication.js';
import config from './config.js';
import eventRouter from './event/event.router.js';
import uploadRouter from './upload/upload.router.js';
import userRouter from './user/user.router.js';
import nodeRouter from './node/node.router.js';
import nodeGroupRouter from './nodeGroup/nodeGroup.router.js';
import unitRouter from './unit/unit.router.js';
import malshabRouter from './malshab/malshab.router.js';
import questionnaireSchemaRouter from './questionnaireSchema/questionnaireSchema.router.js';
import reportRouter from './report/report.router.js';
import preparationKitRouter from './preparationKit/preparationKit.router.js';

const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const getExpireDate = () => {
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  return nextYear;
};

// Auth server
app.get('/login/:userId', (req, res) => {
  const accessToken = buildJwtById(req.params.userId);
  res.cookie(config.tokenName, accessToken, { expires: getExpireDate() });
  res.redirect(config.clientHost);
});

// Login by role
app.get('/login/role/:role', (req, res) => {
  const accessToken = buildJwtByRole(req.params.role);
  res.cookie(config.tokenName, accessToken, { expires: getExpireDate() });
  res.redirect(config.clientHost);
});

// Config server
app.get('/config', (req, res) => {
  res.send({
    apiUri: `http://localhost:${config.port}`,
    tokenName: config.tokenName,
    fileUpload: config.fileUpload,
    attachments: config.attachments,
  });
});

app.use('/api/event', eventRouter);
app.use('/api/nodeGroup', nodeGroupRouter);
app.use('/api/user', userRouter);
app.use('/api/unit', unitRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/node', nodeRouter);
app.use('/api/malshab', malshabRouter);
app.use('/api/node', nodeRouter);
app.use('/api/questionnaire-schema', questionnaireSchemaRouter);
app.use('/api/report', reportRouter);
app.use('/api/preparation-kit', preparationKitRouter);

app.listen(config.port, () => console.log(`Mock server listening on ${config.port}`));
