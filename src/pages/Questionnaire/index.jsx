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
// import UnitService from '../../services/unit.service';
// import { UserService, Role } from '../../services/user.service';
import UserStoreInstance from '../../stores/User.store';
import { UserService } from '../../services/user.service';
// import OptionsButton from './components/OptionsButton/OptionsButton';

const Questionnaire = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const userRole = UserStoreInstance.userProfile.role;
  const [allQuestionnaireRows, setAllQuestionnaireRows] = useState([]);
  const [questionnaireRowsToShow, setQuestionnaireToShow] = useState([]);
  const colNames = [t('tableColumns.questionnaireName'), t('tableColumns.intended'), t('tableColumns.writer'), t('tableColumns.changeDate'), t('tableColumns.questionsNumber')];
  useEffect(async () => {
    try {
      const allQuestionnaires = await QuestionnaireService.getQuestionnaires();
      const promises = allQuestionnaires.map(async (qusrionnaire) => {
        const questionnaireWriter = await UserService.getUserById(qusrionnaire.createdBy);

        let intendedRole;
        if (!qusrionnaire.targetRoles.length) {
          intendedRole = '-';
        } else if (qusrionnaire.targetRoles.includes('MALSHAB') && qusrionnaire.targetRoles.length === 1) {
          intendedRole = t('role.malshab');
        } else if (!qusrionnaire.targetRoles.includes('MALSHAB')) {
          intendedRole = t('permissions.appreciateor');
        } else {
          intendedRole = t('permissions.malshabAppreciateor');
        }
        return {
          id: qusrionnaire.id,
          data: [
            qusrionnaire.name,
            intendedRole,
            questionnaireWriter.name,
            Moment(new Date(1621506391480)).format('DD/MM/YYYY'),
            qusrionnaire.questions.length,
          ],
        };
      });
      const questionnaireRows = await Promise.all(promises);
      setAllQuestionnaireRows(questionnaireRows);
      setQuestionnaireToShow(questionnaireRows);
    } catch {
      toast(t('error.server'));
    }
  }, []);

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
          <span className={classes.countTitle}>{`(${questionnaireRowsToShow.length})`}</span>
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
