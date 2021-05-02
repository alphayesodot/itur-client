/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import buildJwt from './authentication.js';
import config from './config.js';
import eventRouter from './event/event.router.js';
import xmlRouter from './xmlUpload/xml.router.js';
import unitRouter from './unit/unit.router.js';

const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());

// Auth server
app.get('/auth/login/:userId', (req, res) => {
  const accessToken = buildJwt(req.params.userId);
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  res.cookie(config.jwtTokenName, accessToken, { expires: nextYear });
  res.redirect(config.clientHost);
});

// Config server
app.get('/config', (req, res) => {
  res.send({
    uri: {
      auth: `http://localhost:${config.port}`,
      api: `http://localhost:${config.port}`,
    },
    tokenName: config.jwtTokenName,
    secret: config.secret,
    xmlUpload: config.xmlUpload,
  });
});

app.use('/api/event', eventRouter);
app.use('/api/xml-upload', xmlRouter);
app.use('/api/unit', unitRouter);

app.listen(config.port, () => console.log(`Mock server listening on ${config.port}`));
