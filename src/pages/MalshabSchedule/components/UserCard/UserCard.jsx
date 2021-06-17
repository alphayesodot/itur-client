import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
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
      console.log(res);
      setEvents(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

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
            <div className={classes.eventsList}>
              {events.map((event) => (
                <div>{event.id}</div>
              ))}
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
