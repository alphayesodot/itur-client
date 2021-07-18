/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Toolbar, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './Questionnaire.styles';
import Question from './Question/Question';

const Questionnaire = ({ questions, answers, setAnswers }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.mainContainer}>
      <Toolbar className={classes.toolbar}>
        <div />
        <div>
          <Typography className={classes.questionsHeader}>{t('interviewDashboard.questionnaire.questions')}</Typography>
        </div>
      </Toolbar>
      <Container>
        <List component='nav' style={{ color: '#fff', height: '22.8rem' }} className={classes.list}>
          {questions.map((question, index) => (
            <Question
              question={question}
              key={index}
              answer={answers[index]}
              setAnswer={(answer) => {
                const newAnswers = answers.slice();
                newAnswers[index] = answer;
                setAnswers(newAnswers);
              }}
            />
          ))}
        </List>
      </Container>
    </DashboardCard>
  );
};

export default Questionnaire;
