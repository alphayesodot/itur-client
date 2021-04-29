import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Questionnaire from './components/Questionnaire/Questionnaire';
import useStyles from './index.styles';
import EventService from '../../services/event.service';
import MalshabService from '../../services/malshab.service';
import Notesbox from './components/Notesbox/Notesbox';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Highlights from './components/Highlights/Highlights';

const InterviewDashboard = ({ eventId }) => {
  const classes = useStyles();
  const [event, setEvent] = useState();
  const [eventLoaded, setEventLoaded] = useState(false);
  const [malshab, setMalshab] = useState();

  useEffect(async () => {
    setEvent(await EventService.getEventById(eventId));
    setEventLoaded(true);
  }, []);

  useEffect(async () => {
    if (event) setMalshab(await MalshabService.getMalshabByIdentityNumber(event.malshab.id));
  }, [event]);

  useEffect(async () => {
    console.log(malshab);
  }, [malshab]);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <Questionnaire />
            <Notesbox />
            <DashboardCard height='5rem' mt='2rem' backgroundColor='primary' alignItems='center'>
              <ProgressBar date={event?.time} eventLoaded={eventLoaded} />
            </DashboardCard>
          </Grid>
          <Grid item lg={9}>
            <DashboardCard style={{ height: '41rem' }} />
            <Highlights />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default InterviewDashboard;
