import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import MalshabInfo from '../../../../common/MalshabInfo/MalshabInfo';
import useStyles from './MalshabData.styles';

const MalshabData = ({ malshab }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      {malshab
        ? <MalshabInfo />
        : (
          <Typography className={classes.message}>
            {t('message.noMalshab')}
          </Typography>
        )}
    </DashboardCard>
  );
};

export default MalshabData;
