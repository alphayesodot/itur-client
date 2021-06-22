import { Typography, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './UserCard.styles';
import userIcon from '../../../../utils/images/unitControlPage/userpic-blue-small.svg';
import EventService from '../../../../services/event.service';

const UserCard = ({ user, selectedDate }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventService.getEvents({ date: selectedDate, interviewerId: user.id }).then((res) => {
      setEvents(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  // formats date and returns hour in 24hour format
  const formatDate = (date) => new Date(date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  // replace last chars from string with ... if exceeds maximum allowed chars
  const formatName = (name) => (name.length > 17 ? `${name.slice(0, 17)}...` : name);

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
            <div className={classes.eventsBox}>
              <ul className={classes.eventsList}>
                {events.map((event) => (
                  <li className={classes.eventItem}>
                    <div className={classes.innerRow}>
                      <IconButton className={classes.deleteIcon}>
                        <DeleteOutlinedIcon />
                      </IconButton>
                      <Typography className={`${classes.eventText}`}>
                        {`${formatDate(event.time)} ${formatName(event.id)}`}
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
