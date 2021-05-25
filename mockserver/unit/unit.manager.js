import units from './db.js';

class UnitManager {
  static async getUnits(req, res) {
    res.send(units || 404);
  }

  static createUnit(req, res) {
    const newUnit = { id: '507f191e810c19729de369ea', name: req.body.unitName };
    units.push(newUnit);
    res.send(newUnit || 404);
  }

  static getUnitById(req, res) {
    res.send(units.find((unit) => unit.id === req.params.id));
  }
}

export default UnitManager;
