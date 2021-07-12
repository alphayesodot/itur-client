import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Preview.styles';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';
import DataTable from '../../../../common/DataTable/DataTable';
import { QuestionType } from '../../../../services/questionnaireSchema.service';

const Preview = ({ questionnaire }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const separationString = '//';
  const isQuestionnaire = Object.keys(questionnaire).length > 0;
  const mapQuestionToType = new Map();
  const questionTypes = [
    { id: QuestionType.open, name: t('question.open') },
    { id: QuestionType.multipleChoice, name: t('question.multiple') },
    { id: QuestionType.checkbox, name: t('question.checkbox') },
    { id: QuestionType.linearScale, name: t('question.linearScale') },
    { id: QuestionType.date, name: t('question.date') }];
  questionTypes.forEach(({ id, name }) => { mapQuestionToType[id] = name; });

  const createRowData = () => {
    const rows = questionnaire.questions.map((question, idx) => ({
      id: idx,
      data: [idx + 1, question.title, mapQuestionToType[question.type]],
    }));
    return rows;
  };
  const columnNames = ['#', t('question.question'), t('question.questionType')];
  const columnWidth = ['1rem', '80%', '20%'];

  return (
    (
      <DashboardCard className={classes.root}>
        { !isQuestionnaire
          ? <NoObjectsToShow title={t('title.chooseQuestionnairePreview')} />
          : (
            <>
              <Typography className={classes.title}>
                <span className={classes.titleProp}>
                  <strong>{t('title.questionnaireName')}</strong>
                  <span className={classes.titleProp}>{`${questionnaire.name}`}</span>
                  <span className={classes.titleProp}>{`${separationString}`}</span>
                </span>
                <span className={classes.titleProp}>
                  <strong>{t('title.questions')}</strong>
                  <span className={classes.titleProp}>{`${questionnaire.questions.length}`}</span>
                  <span className={classes.titleProp}>{`${separationString}`}</span>
                </span>
                {' '}
              </Typography>
              {questionnaire.questions.length
                ? (
                  <div className={classes.tableContainer}>
                    <DataTable
                      rowsData={createRowData()}
                      columnNames={columnNames}
                      align='left'
                      widthVec={columnWidth}
                    />
                  </div>
                )
                : (
                  <div className={classes.noQuesitonsContainer}>
                    <NoObjectsToShow title={t('message.noQuestions')} />
                  </div>
                )}
            </>
          )}
      </DashboardCard>
    )
  );
};

export default Preview;
