import units from './db';

class UnitManager {
  static async getUnits(req, res) {
    res.send(units || 404);
  }
}

export default UnitManager;
