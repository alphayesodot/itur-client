import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import EventService from '../../../../services/event.service';
import useStyles from './EventsCard.styles';

const EventsCard = ({ malshabId }) => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    EventService.getEvents({ malshabId }).then((res) => {
      setEvents(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.sectionTitle}>
        {t('title.interviewsHistory')}
      </Typography>
      <DashboardCard className={classes.card}>
        {JSON.stringify(events)}
      </DashboardCard>
    </div>
  );
};

export default EventsCard;
