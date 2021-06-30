import axios from 'axios';
import config from '../appConf';

class ReportService {
  static async createReport(nodeGroupIds, unitIds, startDate, endDate) {
    const { data } = await axios.request({
      method: 'POST',
      url: `${config.uri.api}/api/report`,
      data: {
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
