import React from 'react';
import { useTranslation } from 'react-i18next';
import Question from '../Question/Question';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './QuestionsDashboard.styles';

const QuestionsDashboard = ({ questionsArr, setQuestionsArr, showErrors }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const addQuestion = (questionObject) => {
    setQuestionsArr([...questionsArr, questionObject]);
  };

  const deleteQuestion = (questionIdx) => {
    const tmpQuestionsArr = [...questionsArr];
    tmpQuestionsArr.splice(questionIdx, 1);
    setQuestionsArr([...tmpQuestionsArr]);
  };

  const updateQuestion = (question, questionIdx) => {
    const tmpQuestionsArr = [...questionsArr];
    tmpQuestionsArr[questionIdx] = question;
    setQuestionsArr([...tmpQuestionsArr]);
  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.questionnaireCreationTitle}>
        <span className={classes.number}>#</span>
        <span className={classes.titleMust}>{t('question.required')}</span>
        <span className={classes.titleQuestionType}>{t('question.questionType')}</span>
        <span className={classes.titleQuestion}>{t('question.question')}</span>
        <span className={classes.titlePlaceholder} />
      </div>
      <div className={classes.internalQuestionContainer}>
        <div className={classes.questionsLines}>
          {questionsArr.map((question, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className={classes.questionLine} key={idx}>
              <span className={classes.number}>{idx + 1}</span>
              <Question
                currentQuestion={question}
                addQuestion={addQuestion}
                deleteQuestion={() => { deleteQuestion(idx); }}
                updateQuestion={(q) => { updateQuestion(q, idx); }}
                showErrors={showErrors}
              />
            </div>
          ))}
          <div className={classes.questionLine}>
            <span className={classes.number} />
            <Question addQuestion={addQuestion} deleteQuestion={() => {}} />
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default QuestionsDashboard;
