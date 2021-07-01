import malshabs from './db.js';

class MalshabManager {
  static async getMalshabById(req, res) {
    res.send(malshabs.find((malshab) => malshab.identityNumber === req.params.id));
  }
  static async getAttachmentByKey(req, res) {
    res.send(Buffer.from('Hi!'));
  }
  static async uploadAttachment(req, res) {
    const fileKey = 'newfile.txt';
    const searchMalshab = malshabs.find((malshab) => malshab.identityNumber === req.params.id);
    if (searchMalshab) {
      searchMalshab.attachments.push('newfile.txt');
    }
    res.send({ fileKey });
  }
}

export default MalshabManager;
