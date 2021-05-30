import units from './db.js';

class UnitManager {
  static async getUnits(req, res) {
    res.send(units || 404);
  }

  static createUnit(req, res) {
    const newUnit = { id: UnitManager.generateId(), name: req.body.unitName };
    units.push(newUnit);
    res.send(newUnit || 404);
  }

  static getUnitById(req, res) {
    res.send(units.find((unit) => unit.id === req.params.id));
  }

  static generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default UnitManager;
