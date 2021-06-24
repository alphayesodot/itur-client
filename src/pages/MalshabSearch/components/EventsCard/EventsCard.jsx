import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './EventsCard.styles';

const EventsCard = ({ malshabId }) => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {

  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.sectionTitle}>
        {t('title.interviewsHistory')}
      </Typography>
      <DashboardCard className={classes.card}>
        events
      </DashboardCard>
    </div>
  );
};

export default EventsCard;
