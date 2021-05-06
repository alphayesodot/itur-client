/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import useStyles from './index.styles';

import DashboardCard from '../../common/DashboardCard/DashboardCard';

const MalshabSchedulePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DashboardCard className={classes.formUnitHeader} />
      <div className={classes.mainInner}>
        <DashboardCard className={classes.usersCard}>
          eewwewewe
        </DashboardCard>
        <DashboardCard className={classes.malshabimCard}>
          asdfasdf
          <div className={classes.malshabimCard.topRow}>
            <h2>מלש"בים סה"כ - 60</h2>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default MalshabSchedulePage;
