import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import useStyles from './index.styles';

const MalshabSearch = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      malshabsearch
    </DashboardCard>
  );
};

export default MalshabSearch;
