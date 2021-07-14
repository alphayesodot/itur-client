import jwt from 'jsonwebtoken';
import users from './db.js';
import units from '../unit/db.js';
import { generateId } from '../utils.js';

class UserManager {
  static async getUsers(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    const unitId = req.query.unitId || requester.unitId;
    const unitUsers = users.filter((user) => user.unitId === unitId);
    res.send(unitUsers || 404);
  }

  static async getUserById(req, res) {
    res.send(users.find((user) => user.id === req.params.id));
  }

  static async getUsersByRoles(req, res) {
    res.send(users.filter((user) => req.body.roles.includes(user.role)));
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
    newUser = { mail: `${newUser.name}@iturradardev.onmicrosoft.com`, password: 'DFGJKL123456' };
    res.send(newUser || 404);
  }

  static async getMyUnit(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    res.send(units.find((unit) => unit.id === requester.unitId));
  }
}

export default UserManager;
