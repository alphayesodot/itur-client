import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography, Divider } from '@material-ui/core';
import Calender from '../Calender/Calender';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import EventService from '../../../../services/event.service';
import useStyles from './EventsSection.styles';

const getSortedEvents = (events) => (
  events.sort((first, second) => new Date(second.time).getTime() - new Date(first.time).getTime())
);

const EventsSection = ({ malshabId }) => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    EventService.getEvents({ malshabId }).then((res) => {
      setEvents(getSortedEvents(res));
    }).catch(() => {
      toast(t('error.server'));
    });
  }, [malshabId]);

  return (
    <div className={classes.root}>
      {events.length > 0 && (
      <div className={classes.calenderDiv}>
        <Calender events={events} />
      </div>
      )}
      <div className={classes.mainDiv}>
        <Typography className={classes.sectionTitle}>
          {t('title.interviewsHistory')}
        </Typography>
        <DashboardCard className={classes.card}>
          {events.length ? events.map((event) => (
            <div key={event.id} className={classes.row}>
              <Typography className={classes.mainData}>
                {new Date(event.time).toLocaleDateString('en-GB')}
                {'   '}
                <strong>{event.node.name}</strong>
              </Typography>
              <Divider className={classes.divider} />
            </div>
          )) : (
            <Typography className={classes.message}>
              {t('message.noEvents')}
            </Typography>
          )}
        </DashboardCard>
      </div>
    </div>
  );
};

export default EventsSection;
