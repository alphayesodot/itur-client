import axios from 'axios';
import config from '../appConf';

class ReportService {
  static async createReport(name, nodeGroups, units, startDate, endDate) {
    const { data } = await axios.request({
      method: 'POST',
      url: `${config.uri.api}/api/report`,
      data: {
        name,
        nodeGroupIds: nodeGroups.map((nodeGroup) => nodeGroup.id),
        unitIds: units.map((unit) => unit.id),
        startDate,
        endDate,
      },
    });
    return data;
  }
}

export default ReportService;
