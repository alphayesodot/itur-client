/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Toolbar, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './Questionnaire.styles';
import Question from './Question/Question';

const Questionnaire = ({ questions, setQuestions }) => {
  const classes = useStyles();
  const { t } = useTranslation();

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
              key={index}
              answer={questions[index].answer}
              setAnswer={(answer) => {
                const newQuestions = questions.slice();
                newQuestions[index].answer = answer;
                setQuestions(newQuestions);
              }}
            />
          ))}
        </List>
      </Container>
    </DashboardCard>
  );
};

export default Questionnaire;
