import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import Moment from 'moment';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import DataTable from '../../common/DataTable/DataTable';
import QuestionnaireService from '../../services/Questionnaire.service';
import { UserService } from '../../services/user.service';
import QuestionnaireOptionsButton from './components/QuestionnaireOptionsButton/QuestionnaireOptionsButton';

const Questionnaire = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [allQuestionnaireRows, setAllQuestionnaireRows] = useState([]);
  const [questionnaireRowsToShow, setQuestionnaireToShow] = useState([]);
  const [x, setx] = useState(2);
  const colNames = [t('tableColumns.questionnaireName'), t('tableColumns.intended'), t('tableColumns.writer'), t('tableColumns.changeDate'), t('tableColumns.questionsNumber'), ''];
  const setIntendedRole = (rolesArr) => {
    if (!rolesArr) {
      return '-';
    } if (rolesArr.includes('MALSHAB') && rolesArr.length === 1) {
      return t('role.malshab');
    } if (!rolesArr.includes('MALSHAB')) {
      return t('permissions.appreciateor');
    }
    return t('permissions.malshabAppreciateor');
  };

  const deleteQuestionnaireFromState = (id) => {
    console.log('all:', [...allQuestionnaireRows]);
    console.log('show:', [...questionnaireRowsToShow]);
    console.log('x:', x);
    console.log('a:', a);
    const allIdx = [...allQuestionnaireRows].findIndex(
      (q) => q.id === id,
    );
    const showIdx = [...questionnaireRowsToShow].findIndex(
      (q) => q.id === id,
    );
    if (allIdx > -1) {
      const tmpCopy = [...allQuestionnaireRows];
      tmpCopy.splice(allIdx, 1);
      setAllQuestionnaireRows([...tmpCopy]);
    }
    if (showIdx > -1) {
      const tmpCopy = [...questionnaireRowsToShow];
      tmpCopy.splice(showIdx, 1);
      console.log(tmpCopy);
      setQuestionnaireToShow([...tmpCopy]);
    }
  };

  useEffect(async () => {
    try {
      const allQuestionnaires = await QuestionnaireService.getQuestionnaires();
      const promises = allQuestionnaires.map(async (questionnaire) => {
        const questionnaireWriter = await UserService.getUserById(questionnaire.createdBy);
        const intendedRole = setIntendedRole(questionnaire.targetRoles);
        return {
          id: questionnaire.id,
          data: [
            questionnaire.name,
            intendedRole,
            questionnaireWriter.name,
            Moment(new Date(1621506391480)).format('DD/MM/YYYY'),
            questionnaire.questions.length,
            <QuestionnaireOptionsButton
              questionnaire={questionnaire}
              x={x}
              // allQuestionnaireRows={allQuestionnaireRows}
              // questionnaireRowsToShow={questionnaireRowsToShow}
              // setAllQuestionnaireRows={setAllQuestionnaireRows}
              // setQuestionnaireToShow={setQuestionnaireToShow}
              deleteQuestionnaireFromState={deleteQuestionnaireFromState}
            />,
          ],
        };
      });
      const questionnaireRows = await Promise.all(promises);
      setAllQuestionnaireRows(questionnaireRows);
      setQuestionnaireToShow(questionnaireRows);
      setx(x + 1);
    } catch {
      toast(t('error.server'));
    }
  }, []);
  console.log('mid: ', [...allQuestionnaireRows]);
  return (
    <div className={classes.root}>
      <Header
        allQuestionnaireRows={allQuestionnaireRows}
        setQuestionnaireToShow={setQuestionnaireToShow}
      />
      <DashboardCard className={classes.dashbord}>
        <Typography className={classes.content}>
          <strong className={classes.title}>{t('title.questionnaires')}</strong>
          {' '}
          <span className={classes.countTitle}>{`(${[...questionnaireRowsToShow].length})`}</span>
        </Typography>

        {questionnaireRowsToShow.length
          ? (
            <div className={`${classes.tableContainer}`}>
              <DataTable rowsData={questionnaireRowsToShow} columnNames={colNames} />
            </div>
          )
          : (
            <div className={` ${classes.viewContainer} ${classes.emptyTable}`}>
              {' '}
              {t('title.noQuestionnaires')}
            </div>
          )}
      </DashboardCard>
    </div>
  );
};

export default Questionnaire;
