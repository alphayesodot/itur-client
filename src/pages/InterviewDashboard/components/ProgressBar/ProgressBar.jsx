import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import ProgressStepper from './ProgressStepper/ProgressStepper';
import useStyles from './ProgressBar.styles';

const ProgressBar = () => {
  const classes = useStyles();
  return (
    <DashboardCard className={classes.root}>
      <ProgressStepper />
    </DashboardCard>
  );
};

export default ProgressBar;
