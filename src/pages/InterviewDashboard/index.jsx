import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Questionnaire from './components/Questionnaire/Questionnaire';
import EventService from '../../services/event.service';
import MalshabService from '../../services/malshab.service';
import Notesbox from './components/Notesbox/Notesbox';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Highlights from './components/Highlights/Highlights';
import Malshab from './components/Malshab/Malshab';
import AlertSnackbar from './components/Malshab/MalshabDetails/ErrorSnackbar';

const InterviewDashboard = ({ eventId }) => {
  const [event, setEvent] = useState();
  const [eventLoaded, setEventLoaded] = useState(false);
  const [malshab, setMalshab] = useState();
  const [note, setNote] = useState();
  const history = useHistory();
  const [openedAlert, setOpenedAlert] = useState(false);
  const { t } = useTranslation();

  useEffect(async () => {
    setEvent(await EventService.getEventById(eventId));
    setEventLoaded(true);
  }, []);

  useEffect(async () => {
    if (event) setMalshab(await MalshabService.getMalshabById(event.malshabShort.id));
  }, [event]);

  const openErrorSnackbar = () => {
    setOpenedAlert(true);
    setTimeout(() => {
      setOpenedAlert(false);
    }, 4000);
  };

  const finishInterview = async () => {
    await EventService.addEventNote(eventId, note)
      .then(() => history.push('/luz'))
      .catch(() => openErrorSnackbar());
  };

  return (
    <>
      <AlertSnackbar open={openedAlert} text={t('interviewDashboard.finishInterviewError')} />
      <Grid container spacing={4}>
        <Grid item lg={9}>
          <Malshab malshab={malshab} event={event} finishInterview={finishInterview} />
          <Highlights />
        </Grid>
        <Grid item lg={3}>
          <Questionnaire />
          <Notesbox note={note} setNote={(v) => setNote(v)} />
          <ProgressBar date={event?.time} eventLoaded={eventLoaded} />
        </Grid>
      </Grid>
    </>
  );
};

export default InterviewDashboard;
