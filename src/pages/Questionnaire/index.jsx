import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
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
  const [allQuestionnaireRows, setAllNodeGroupRows] = useState([]);
  const [questionnaireRowsToShow, setQuestionnaireToShow] = useState([]);
  const colNames = [t('tableColumns.questionnaireName'), t('tableColumns.intended'), t('tableColumns.writer'), t('tableColumns.changeDate'), t('tableColumns.questionsNumber')];

  // const updateAllNodeGroupList = async () => {
  //   const nodeGroups = await NodeGroupService.getNodeGroups();
  //   const promises = nodeGroups.map(async (nodeGroup) => {
  //     const unit = await UnitService.getUnitById(nodeGroup.unitId);
  //     const ramad = (await UserService.getUsersByUnitId(nodeGroup.unitId))
  //       .find((user) => user.role === Role.RamadIturOfUnit);
  //     return {
  //       id: nodeGroup.id,
  //       data: [nodeGroup.name,
  //         unit.name,
  //         nodeGroup.usersIds ? nodeGroup.usersIds.length : 0, ramad?.name || '',
  //         <OptionsButton nodeGroup={nodeGroup} updateAllNodeGroupList={updateAllNodeGroupList} />],
  //     };
  //   });
  //   const getAllNodeGroupRows = await Promise.all(promises);
  //   setAllNodeGroupRows(getAllNodeGroupRows);
  //   setQuestionnaireToShow(getAllNodeGroupRows);
  // };
  useEffect(async () => {
    const allQuestionnaires = await QuestionnaireService.getQuestionnaires();
    const questionnaireRows = allQuestionnaires.map(async (qusrionnaire) => {
      const questionnaireWriter = await UserService.getUser(qusrionnaire.createdBy);
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
          qusrionnaire.updatedAt,
          qusrionnaire.questions.length,
        ],
      };
    });
    setAllNodeGroupRows(questionnaireRows);
    setQuestionnaireToShow(questionnaireRows);
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
        <div class={classes.tableContainer}>
          <DataTable rowsData={questionnaireRowsToShow} colomnsNames={colNames} />

        </div>
        {/* {questionnaireRowsToShow.length
          ? <DataTable rowsData={questionnaireRowsToShow} colomnsNames={colNames} />
          : (
            <div className={` ${classes.viewContainer} ${classes.emptyTable}`}>
              {' '}
              {t('title.noQuestionnaires')}
            </div>
          )} */}
      </DashboardCard>
    </div>
  );
};

export default Questionnaire;
