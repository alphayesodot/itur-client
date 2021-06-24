import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography, Divider } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import EventService from '../../../../services/event.service';
import NodeService from '../../../../services/node.service';
import useStyles from './EventsCard.styles';

const EventsCard = ({ malshabId }) => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    EventService.getEvents({ malshabId }).then((res) => {
      Promise.all(
        res.map(async (event) => ({
          ...event,
          nodeData: await NodeService.getNodeById(event.node.id),
        })),
      ).then((populatedRes) => {
        setEvents(populatedRes);
      });
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
        {events.map((event) => (
          <div className={classes.raw}>
            <Typography className={classes.mainData}>
              {new Date(event.time).toLocaleDateString('en-GB')}
              {'   '}
              <strong>{event.nodeData.name}</strong>
            </Typography>
            <Divider className={classes.divider} />
          </div>
        ))}
      </DashboardCard>
    </div>
  );
};

export default EventsCard;
