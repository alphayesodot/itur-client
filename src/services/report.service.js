import axios from 'axios';
import config from '../appConf';

class ReportService {
  static async createReport(name, nodeGroupIds, unitIds, startDate, endDate) {
    const { data } = await axios.request({
      method: 'POST',
      url: `${config.apiUri}/api/report`,
      data: {
        name,
        nodeGroupIds,
        unitIds,
        startDate,
        endDate,
      },
    });
    return data;
  }
}

export default ReportService;
