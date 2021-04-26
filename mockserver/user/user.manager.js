import users from './db';

class UserManager {
  static async getUsersByUnitId(req, res) {
    const unitUsers = users.filter((user) => user.unitId === req.params.id);
    res.send(unitUsers || 404);
  }
}

export default UserManager;
