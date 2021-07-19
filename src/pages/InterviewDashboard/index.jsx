import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EventService from '../../services/event.service';
import MalshabService from '../../services/malshab.service';
import Notesbox from './components/Notesbox/Notesbox';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Highlights from './components/Highlights/Highlights';
import Malshab from './components/Malshab/Malshab';
import AlertSnackbar from './components/Malshab/MalshabDetails/ErrorSnackbar';
import questionnaireService from '../../services/questionnaire.service';
import CustomBackDrop from '../../common/CustomBackDrop/CustomBackDrop';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Questionnaire from '../../common/Questionnaire/Questionnaire';

const InterviewDashboard = ({ eventId }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const [event, setEvent] = useState();
  const [malshab, setMalshab] = useState();
  const [questionnaireSchema, setQuestionnaireSchema] = useState();
  const [questions, setQuestions] = useState();
  const [note, setNote] = useState();
  const [openedAlert, setOpenedAlert] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(async () => {
    setEvent(await EventService.getEventById(eventId));
  }, []);

  useEffect(async () => {
    if (event) {
      if (!malshab) setMalshab(await MalshabService.getMalshabById(event.malshabShort.id));
      if (!questionnaireSchema) {
        const questionnaireSchemas = await questionnaireService.getQuestionnaireByNodeId(event.node.id);
        setQuestionnaireSchema(questionnaireSchemas[0]);
      }
    }
  }, [event]);

  useEffect(async () => {
    if (questionnaireSchema && !questions) setQuestions(questionnaireSchema.questions);
    console.log('questionnaire', questionnaireSchema);
  }, [questionnaireSchema]);

  useEffect(() => {
    setTimeout(() => {
      if (!event || !malshab || !questionnaireSchema) setErrorState(true);
    }, 15000);
  }, []);

  const openErrorSnackbar = () => {
    setOpenedAlert(true);
    setTimeout(() => {
      setOpenedAlert(false);
    }, 4000);
  };

  const finishInterview = async () => {
    await EventService.addEventNote(eventId, note)
      .then(() => questionnaireService.createQuestionnaireInstance({ schemaId: questionnaireSchema }))
      .then(() => history.push('/luz'))
      .catch(() => openErrorSnackbar());
  };

  const getComponentsStatus = () => {
    if (event && malshab && questions) return 'loaded';
    if (errorState) return 'error';
  };

  switch (getComponentsStatus()) {
    case 'loaded':
      return (
        <>
          <AlertSnackbar open={openedAlert} text={t('interviewDashboard.finishInterviewError')} />
          <Grid container spacing={4}>
            <Grid item lg={9}>
              <Malshab malshab={malshab} event={event} finishInterview={finishInterview} />
              <Highlights />
            </Grid>
            <Grid item lg={3}>
              {questions && <Questionnaire questions={questions} answers={answers} setAnswers={setAnswers} />}
              <Notesbox note={note} setNote={(v) => setNote(v)} />
              <ProgressBar date={event?.time} />
            </Grid>
          </Grid>
        </>
      );
    case 'error':
      return <h1>ERROR!!</h1>;
    default:
      return (
        <>
          <DashboardCard style={{ height: '100%', width: '100%' }} />
          <CustomBackDrop />
        </>
      );
  }
};

export default InterviewDashboard;
