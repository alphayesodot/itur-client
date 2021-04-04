/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import { useState } from 'react';
import { Button, Toolbar, IconButton, Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import appTheme from '../../../../theme';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './Questionnaire.styles';
import Question from './Question/Question';

const Questionnaire = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const questions = Array(21).fill('שאלה בנושא מסויים והסגנון אמריקאי');
  const [answers, setAnswers] = useState([]);

  return (
    <DashboardCard
      backgroundColor={appTheme.palette.primary.main}
      height='32rem'
    >
      <Toolbar className={classes.toolbar}>
        <div>
          <Button
            classes={{
              root: classes.interviewScheduleBtn,
              label: classes.label,
            }}
          >
            {t('interviewDashboard.questionnaire.expandedQuestionnaire')}
          </Button>
          <IconButton>
            <ZoomOutMapIcon htmlColor='#fff' />
          </IconButton>
        </div>
        <div>
          <p className={classes.questionsHeader}>
            {t('interviewDashboard.questionnaire.questions')}
          </p>
        </div>
      </Toolbar>
      <Container>
        <List
          component='nav'
          aria-label='main mailbox folders'
          style={{ color: '#fff' }}
          className={classes.list}
        >
          {questions.map((question) => (
            <Question
              question={question}
              setAnswerFunction={() => setAnswers((current) => { })}
              key={Math.random()}
            />
          ))}
        </List>
      </Container>
    </DashboardCard>
  );
};

export default Questionnaire;
