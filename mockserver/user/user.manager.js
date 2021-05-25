import users from './db.js';

class UserManager {
  static async getUsers(req, res) {
    const unitUsers = users.filter((user) => user.unitId === req.query.unitId);
    res.send(unitUsers || 404);
  }

  static async getUserById(req, res) {
    res.send(users.find((user) => user.id === req.params.id));
  }

  static async createUser(req, res) {
    const { unitId, role, userName } = req.body;
    let newUser = {
      id: '507f1f77bcf86cd799439016',
      name: userName,
      role,
      unitId,
    };
    users.push(newUser);
    newUser = { ...newUser, password: 'DFGJKL123456' };
    res.send(newUser || 404);
  }
}

export default UserManager;
