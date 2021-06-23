import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';

const Header = ({ malshab, setMalshab }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      gggggg
    </DashboardCard>
  );
};

export default Header;
