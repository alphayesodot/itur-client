import React, { useEffect, useState } from 'react';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import MalshabScheduleStore from '../../../../stores/MalshabSchedule.store.js';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './UserCard.styles';
import ScheduleStore from '../../../../stores/Schedule.store';
import userIcon from '../../../../utils/images/unitControlPage/userpic-blue-small.svg';
import EventService from '../../../../services/event.service';

const UserCard = observer(({ user }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (MalshabScheduleStore.selectedNodeGroup && MalshabScheduleStore.selectedDate) {
      ScheduleStore.getScheduleOfInterviewer(
        MalshabScheduleStore.selectedDate,
        MalshabScheduleStore.selectedNodeGroup.id,
        user.id,
      ).then((res) => {
        setEvents(res.sort((firstEvent, secondEvent) => (
          new Date(firstEvent.time).getTime() - new Date(secondEvent.time).getTime()
        )));
      }).catch(() => {
        toast(t('error.server'));
      });
    }
  }, [
    user,
    MalshabScheduleStore.selectedDate,
    MalshabScheduleStore.selectedNodeGroup,
    ScheduleStore.schedules,
  ]);

  // formats date and returns hour in 24hour format
  const formatDate = (date) => new Date(date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  // replace last chars from string with ... if exceeds maximum allowed chars
  const formatName = (name) => (name.length > 17 ? `${name.slice(0, 12)}...` : name);

  const getTotalNumberOfEvents = () => (`${t('unitControlPage.totalText')} ${events.length}`);

  const handleRemoveInterviewer = (eventId) => {
    EventService.removeInterviewer(eventId, user.id).then(() => {
      ScheduleStore.removeInterviewFromSchedule(
        MalshabScheduleStore.selectedNodeGroup.id,
        MalshabScheduleStore.selectedDate,
        user.id,
        eventId,
      );
    }).catch(() => {
      toast(t('error.server'));
    });
  };

  return (
    <DashboardCard className={classes.root}>
      <Typography className={classes.topRow}>
        <span className={classes.sum}>
          {getTotalNumberOfEvents()}
        </span>
        <div className={classes.info}>
          {user.name}
          <Tooltip title={user.mail}>
            <Typography className={classes.mail}>
              {user.mail}
            </Typography>
          </Tooltip>
        </div>
        <img alt='icon' src={userIcon} className={classes.icon} />
      </Typography>
      <div className={classes.cardBody}>
        {events.length
          ? (
            <div className={classes.eventsDiv}>
              <ul className={classes.eventsList}>
                {events.map((event) => (
                  <li key={event.id} className={classes.eventItem}>
                    <div className={classes.innerRow}>
                      <Tooltip title={t('toolTip.removeInterview')}>
                        <IconButton
                          onClick={() => handleRemoveInterviewer(event.id)}
                          className={classes.deleteIcon}
                        >
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                      <Typography component='span' className={classes.eventText}>
                        <Typography className={classes.timeText}>
                          {formatDate(event.time)}
                        </Typography>
                        <Typography className={classes.nameText}>
                          {formatName(`${event.malshabShort?.firstName} ${event.malshabShort?.lastName}`)}
                        </Typography>
                        {event.node.name}
                      </Typography>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
          : (
            <div className={classes.noEvents}>
              <Typography className={classes.noEventsText}>{t('unitControlPage.noEvents')}</Typography>
            </div>
          )}
      </div>
    </DashboardCard>
  );
});

export default UserCard;
