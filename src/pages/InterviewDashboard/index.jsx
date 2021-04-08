import Grid from '@material-ui/core/Grid';
import InterviewerHeader from '../../common/InterviewerHeader/InterviewerHeader';
import DashboardCard from './components/DashboardCard/DashboardCard';
import appTheme from '../../theme';
import Questionnaire from './components/Questionnaire/Questionnaire';
import useStyles from './index.styles';

const InterviewDashboard = () => {
  const classes = useStyles();

  return (
    <>
      <InterviewerHeader />
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <Questionnaire />
            <DashboardCard
              backgroundColor={appTheme.palette.primary.secondary}
              height='14rem'
              mt='2rem'
            />
          </Grid>
          <Grid item lg={7}>
            <DashboardCard />
          </Grid>
          <Grid item lg={2}>
            <DashboardCard height='25rem' />
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
