import units from './db.js';

class UnitManager {
  static async getUnits(req, res) {
    res.send(units || 404);
  }
}

export default UnitManager;
