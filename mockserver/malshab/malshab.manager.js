import malshabs from './malshabs.js';

class MalshabManager {
  static async getMalshabByIdentityNumber(req, res) {
    const [malshab] = malshabs.filter(malshabObj => malshabObj.identityNumber === req.params.identityNumber);
    res.send(malshab || 404);
  }
}

export default MalshabManager;
