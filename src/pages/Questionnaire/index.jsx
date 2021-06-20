import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
// import DataTable from '../../common/DataTable/DataTable';
// import NodeGroupService from '../../services/nodeGroup.service';
// import UnitService from '../../services/unit.service';
// import { UserService, Role } from '../../services/user.service';
// import UserStoreInstance from '../../stores/User.store';
// import OptionsButton from './components/OptionsButton/OptionsButton';

const Questionnaire = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const userRole = UserStoreInstance.userProfile.role;
  const [allQuestionnaireRows, setAllNodeGroupRows] = useState([]);
  const [nodeGroupRowsToShow, setQuestionnaireToShow] = useState([]);
  const colNames = [t('tableColumns.questionnaireName'), t('tableColumns.intended'), t('tableColumns.changeDate'), t('tableColumns.questionsNumber')];

  const updateAllNodeGroupList = async () => {
    const nodeGroups = await NodeGroupService.getNodeGroups();
    const promises = nodeGroups.map(async (nodeGroup) => {
      const unit = await UnitService.getUnitById(nodeGroup.unitId);
      const ramad = (await UserService.getUsersByUnitId(nodeGroup.unitId))
        .find((user) => user.role === Role.RamadIturOfUnit);
      return {
        id: nodeGroup.id,
        data: [nodeGroup.name,
          unit.name,
          nodeGroup.usersIds ? nodeGroup.usersIds.length : 0, ramad?.name || '',
          <OptionsButton nodeGroup={nodeGroup} updateAllNodeGroupList={updateAllNodeGroupList} />],
      };
    });
    const getAllNodeGroupRows = await Promise.all(promises);
    setAllNodeGroupRows(getAllNodeGroupRows);
    setQuestionnaireToShow(getAllNodeGroupRows);
  };
  useEffect(async () => {
    await updateAllNodeGroupList();
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
          <span className={classes.countTitle}>{`(${nodeGroupRowsToShow.length})`}</span>
        </Typography>
        {/* <DataTable rowsData={nodeGroupRowsToShow} colomnsNames={colNames} /> */}
      </DashboardCard>
    </div>
  );
};

export default Questionnaire;
