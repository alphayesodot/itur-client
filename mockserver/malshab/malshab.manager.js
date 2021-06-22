import malshabs from './db.js';

class MalshabManager {
  static async getMalshabById(req, res) {
    res.send(malshabs.find((malshab) => malshab.identityNumber === req.params.id));
  }
  static async getAttachmentByKey(req, res) {
    res.send(Buffer.from('Hi!'));
  }
}

export default MalshabManager;
