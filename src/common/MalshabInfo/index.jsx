import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import MalshabService from '../../services/malshab.service';
import DashboardCard from '../DashboardCard/DashboardCard';
import CustomBackDrop from '../CustomBackDrop/CustomBackDrop';
import useStyles from './index.styles';

const MalshabInfo = ({ id }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [malshab, setMalshab] = useState();

  useEffect(() => {
    setIsLoading(false);
    // TODO: Change
    MalshabService.getMalshabById(0).then((res) => {
      setMalshab(res);
    }).catch(() => {
      toast(t('error.server'));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoading
        ? <CustomBackDrop />
        : (
          <div className={classes.root}>
            <div className={classes.attachments}>
              <Typography className={classes.attachmentsTitle}>{t('title.attachments')}</Typography>
              <DashboardCard className={classes.attachmentsCard} />
            </div>
          </div>
        )}
    </>
  );
};

export default MalshabInfo;
