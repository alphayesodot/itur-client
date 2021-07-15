import jwt from 'jsonwebtoken';
import config from './config.js';
import users from './userdata.js';

const buildJwt = (userId) => jwt.sign(users[userId], config.secret, {
  algorithm: 'HS256',
  expiresIn: '1y',
});

export default buildJwt;
