import jwt from 'jsonwebtoken';
import users from './db.js';
import units from '../unit/db.js';
import { generateId } from '../utils.js';

class UserManager {
  static async getUsers(req, res) {
    const unitUsers = req.query.unitId
      ? users.filter((user) => user.unitId === req.query.unitId)
      : users;
    res.send(unitUsers || 404);
  }

  static async getUserById(req, res) {
    res.send(users.find((user) => user.id === req.params.id));
  }

  static async createUser(req, res) {
    const { unitId, role, name } = req.body;
    let newUser = {
      id: generateId(),
      name,
      role,
      unitId,
    };
    users.push(newUser);
    newUser = { ...newUser, password: 'DFGJKL123456' };
    res.send(newUser || 404);
  }

  static async getMyUnit(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    res.send(units.find((unit) => unit.id === requester.unitId));
  }
}

export default UserManager;
