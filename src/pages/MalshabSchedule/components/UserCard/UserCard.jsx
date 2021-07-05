import { Typography, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './UserCard.styles';
import ScheduleStore from '../../../../stores/Schedule.store';
import userIcon from '../../../../utils/images/unitControlPage/userpic-blue-small.svg';

const UserCard = ({ user, selectedDate, choosenNodeGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (choosenNodeGroup && selectedDate) {
      ScheduleStore.getScheduleOfInterviewer(
        selectedDate,
        choosenNodeGroup.id,
        user.id,
      ).then((res) => {
        setEvents(res.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()));
      }).catch(() => {
        toast(t('error.server'));
      });
    }
  }, [user, selectedDate, choosenNodeGroup]);

  // formats date and returns hour in 24hour format
  const formatDate = (date) => new Date(date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  // replace last chars from string with ... if exceeds maximum allowed chars
  const formatName = (name) => (name.length > 17 ? `${name.slice(0, 12)}...` : name);

  const getTotalNumberOfEvents = () => (`${t('unitControlPage.totalText')} ${events.length}`);

  return (
    <DashboardCard className={classes.root}>
      <Typography className={classes.topRow}>
        <span className={classes.sum}>
          {getTotalNumberOfEvents()}
        </span>
        {user.name}
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
                      <IconButton className={classes.deleteIcon}>
                        <DeleteOutlinedIcon />
                      </IconButton>
                      <Typography component='span' className={classes.eventText}>
                        {formatDate(event.time)}
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
};

export default UserCard;
