import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import DashboardCard from './components/DashboardCard/DashboardCard';
import appTheme from '../../theme';
import Questionnaire from './components/Questionnaire/Questionnaire';
import useStyles from './index.styles';
import EventService from '../../services/event.service';
import MalshabService from '../../services/malshab.service';

const InterviewDashboard = ({ eventId }) => {
  const classes = useStyles();
  const [event, setEvent] = useState();
  const [malshab, setMalshab] = useState();

  useEffect(async () => {
    setEvent(await EventService.getEventById(eventId));
  }, []);

  useEffect(async () => {
    if (event) setMalshab(await MalshabService.getMalshabByIdentityNumber(event.malshab.id));
  }, [event]);

  return (
    <>
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
