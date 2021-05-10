import users from './db.js';

class UserManager {
  static async getUsersByUnitId(req, res) {
    const unitUsers = users.filter((user) => user.unitId === req.params.id);
    res.send(unitUsers || 404);
  }
  static async createUser(req, res) {
    const { unitId, role } = req.body;
    const newUser = {
      id: '507f1f77bcf86cd799439016',
      name: 'user100',
      role,
      unitId,
    };
    users.push(newUser);
    res.send(users || 404);
  }
}

export default UserManager;
