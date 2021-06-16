import axios from 'axios';
import config from '../appConf';

class ReportService {
  static async createReport(name, nodeGroup, unit, startDate, endDate) {
    const { data } = await axios.request({
      method: 'POST',
      url: `${config.uri.api}/api/report`,
      data: {
        name, nodeGroup, unit, startDate, endDate,
      },
    });
    return data;
  }
}

export default ReportService;
