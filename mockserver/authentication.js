import jwt from 'jsonwebtoken';
import config from './config.js';
import users from './userdata.js';

const buildJwt = (userId) => {
  const payload = users[userId];
  return jwt.sign(payload, config.jwtTokenName, {
    algorithm: 'HS256',
    expiresIn: '1y',
  });
};

export default buildJwt;
