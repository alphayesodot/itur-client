import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import ProgressStepper from './ProgressStepper/ProgressStepper';
import useStyles from './ProgressBar.styles';

const ProgressBar = ({ date }) => {
  const classes = useStyles();
  return (
    <DashboardCard className={classes.root}>
      <ProgressStepper date={date} />
    </DashboardCard>
  );
};

export default ProgressBar;
