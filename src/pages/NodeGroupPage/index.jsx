import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import DataTable from './DataTable/DataTable';

function createData(nodeGroupName, unit, users, ramadOfUnit) {
  return [nodeGroupName, unit, users, ramadOfUnit];
}

const NodeGroupPage = () => {
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];
  const classes = useStyles();
  const { t } = useTranslation();
  const colNames = [t('tableColumns.nodeGroupName'), t('tableColumns.unit'), t('tableColumns.users'), t('tableColumns.ramadOfUnit')];
  return (
    <div className={classes.root}>
      <Header />
      <DashboardCard className={classes.dashbord}>
        <div className={classes.content}>
          <Typography>
            <strong>{t('title.nodeGroups')}</strong>
            :
          </Typography>
        </div>
        <DataTable rowsData={rows} colomnsNames={colNames} />
      </DashboardCard>
    </div>
  );
};

export default NodeGroupPage;
