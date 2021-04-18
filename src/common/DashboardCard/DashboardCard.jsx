import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const DashboardCard = withStyles({
  root: {
    borderRadius: '15px',
    boxShadow: 'none',
  },
})(Paper);

export default DashboardCard;
