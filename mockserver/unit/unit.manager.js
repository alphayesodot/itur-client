/* eslint-disable no-unused-vars */
import units from './db.js';

class UnitManager {
  static async getUnits(req, res) {
    res.send(units || 404);
  }

  static addUnit(req, res) {
    const newUnit = { id: '507f191e810c19729de369ea', name: req.body.unitName };
    units.push(newUnit);
    res.send(newUnit);
  }
}

export default UnitManager;
