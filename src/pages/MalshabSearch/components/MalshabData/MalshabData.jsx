import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import MalshabInfo from '../../../../common/MalshabInfo/MalshabInfo';
import EventsSection from '../EventsSection/EventsSection';
import Attachments from '../../../../common/Attachments/Attachments';
import useStyles from './MalshabData.styles';

const MalshabData = ({ malshab }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      {malshab
        ? (
          <div className={classes.content}>
            <MalshabInfo malshab={malshab} />
            <div className={classes.bottomSection}>
              <EventsSection malshabId={malshab.identityNumber} />
              <Attachments
                canUpload
                malshabId={malshab.identityNumber}
                attachments={malshab.attachments}
              />
            </div>
          </div>
        )
        : (
          <Typography className={classes.message}>
            {t('message.noMalshab')}
          </Typography>
        )}
    </DashboardCard>
  );
};

export default MalshabData;
