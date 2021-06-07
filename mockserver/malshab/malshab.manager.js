import malshabs from './db.js';

class MalshabManager {
  static async getMalshabById(req, res) {
    res.send(malshabs.find((malshab) => malshab.id === req.params.id));
  }
}

export default MalshabManager;
