import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import Questionnaire from './components/Questionnaire/Questionnaire';
import EventService from '../../services/event.service';
import MalshabService from '../../services/malshab.service';
import Notesbox from './components/Notesbox/Notesbox';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Highlights from './components/Highlights/Highlights';
import Malshab from './components/Malshab/Malshab';

const InterviewDashboard = ({ eventId }) => {
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

  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={3}>
          <Questionnaire />
          <Notesbox />
          <ProgressBar date={event?.time} eventLoaded={eventLoaded} />
        </Grid>
        <Grid item lg={9}>
          <Malshab malshab={malshab} event={event} />
          <Highlights />
        </Grid>
      </Grid>
    </>
  );
};

export default InterviewDashboard;
