import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default class PreparationKitManager {
  static getPDF(req, res) {
    res.sendFile(`${__dirname}/files/samplePDF.pdf`);
  }

  static getVideo(req, res) {
    res.sendFile(`${__dirname}/files/sampleVideo.mp4`);
  }

  static getFile(req, res) {
    res.sendFile(`${__dirname}/files/${req.params.fileName}`);
  }
}
