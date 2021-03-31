import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InterviewerHeader from '../../common/InterviewerHeader/InterviewerHeader';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import appTheme from '../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    backgroundColor: '#ecf4f6',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const InterviewDashboard = () => {
  const classes = useStyles();

  return (
    <>
      <InterviewerHeader />
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={3} xs={0}>
            <DashboardCard
              backgroundColor={appTheme.palette.primary.main}
              height='32rem'
            />
            <DashboardCard
              backgroundColor={appTheme.palette.primary.secondary}
              height='14rem'
              mt='2rem'
            />
          </Grid>
          <Grid item lg={7} xs={11}>
            <DashboardCard />
          </Grid>
          <Grid item lg={2} xs={0}>
            <DashboardCard
              height='25rem'
            />
            <DashboardCard
              backgroundColor={appTheme.palette.primary.main}
              height='21rem'
              mt='2rem'
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default InterviewDashboard;
