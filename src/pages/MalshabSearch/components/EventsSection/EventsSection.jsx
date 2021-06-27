import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Typography, Divider, Button, Tooltip, IconButton } from '@material-ui/core';
import Calender from '../Calender/Calender';
import play from '../../../../utils/images/schedule/play-button.svg';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import EventService from '../../../../services/event.service';
import useStyles from './EventsSection.styles';

const getSortedEvents = (events) => (
  events.sort((first, second) => new Date(second.time).getTime() - new Date(first.time).getTime())
);

const EventsSection = ({ malshabId }) => {
  const classes = useStyles();
  const history = useHistory();
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
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
        <Calender events={events} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      )}
      <div className={classes.mainDiv}>
        <Typography className={classes.sectionTitle}>
          {t('title.interviewsHistory')}
        </Typography>
        <DashboardCard className={classes.card}>
          {events.length ? events.map((event) => (
            <div key={event.id} className={classes.eventRow}>
              <Button
                fullWidth
                className={classes.button}
                onClick={() => setSelectedDate(new Date(event.time))}
              >
                <Typography>
                  {new Date(event.time).toLocaleDateString('en-GB')}
                  {'   '}
                  <strong>{event.node.name}</strong>
                </Typography>
                <Tooltip title={t('toolTip.playInterview')}>
                  {/* TODO: Send eventId as a prop to interview page */}
                  <IconButton className={classes.iconButton} onClick={() => history.push('/interview')}>
                    <img src={play} alt='playInterview' className={classes.iconButton} />
                  </IconButton>
                </Tooltip>
              </Button>
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
