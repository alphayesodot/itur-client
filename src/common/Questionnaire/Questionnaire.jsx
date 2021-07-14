/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { Toolbar, IconButton, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import { v4 as uuid } from 'uuid';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './Questionnaire.styles';
import Question from './Question/Question';

const Questionnaire = ({ questions }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [answers, setAnswers] = useState([]);

  return (
    <DashboardCard className={classes.mainContainer}>
      <Toolbar className={classes.toolbar}>
        <div />
        <div>
          <Typography className={classes.questionsHeader}>
            {t('interviewDashboard.questionnaire.questions')}
          </Typography>
        </div>
      </Toolbar>
      <Container>
        <List
          component='nav'
          style={{ color: '#fff', height: '22.8rem' }}
          className={classes.list}
        >
          {questions.map((question, index) => (
            <Question
              question={question}
              key={question.title}
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
