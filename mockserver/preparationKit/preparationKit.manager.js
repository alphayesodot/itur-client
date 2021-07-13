import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default class PreparationKitManager {
  static getFile(req, res) {
    res.sendFile(`${__dirname}/files/${req.params.fileName}`);
  }
}
