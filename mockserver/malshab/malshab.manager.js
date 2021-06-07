import malshabs from './db.js';

class MalshabManager {
  static async getMalshabById(req, res) {
    res.send(malshabs.find((malshab) => malshab.identityNumber === req.params.id));
  }
}

export default MalshabManager;
