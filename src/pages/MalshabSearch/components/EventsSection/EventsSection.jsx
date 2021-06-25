import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DateFnsUtils from '@date-io/date-fns';
import { toast } from 'react-toastify';
import {
  Calendar,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Typography, Divider, Badge, Tooltip } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import EventService from '../../../../services/event.service';
import useStyles from './EventsSection.styles';

const datesAreOnSameDay = (first, second) => first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate();

const getSortedEvents = (events) => (
  events.sort((first, second) => new Date(second.time).getTime() - new Date(first.time).getTime())
);

const getSelectedDays = (events, dayOfTheMonth) => {
  const month = dayOfTheMonth.getMonth();
  const year = dayOfTheMonth.getFullYear();
  const eventsOfTheSameMonth = events.filter((event) => new Date(event.time).getMonth() === month
  && new Date(event.time).getFullYear() === year);

  return eventsOfTheSameMonth.map((event) => new Date(event.time).getDate());
};

const EventsSection = ({ malshabId }) => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    EventService.getEvents({ malshabId }).then((res) => {
      setEvents(getSortedEvents(res));
      setSelectedDate(new Date(getSortedEvents(res)[0]?.time));
      setSelectedDays(getSelectedDays(res, new Date()));
    }).catch(() => {
      toast(t('error.server'));
    });
  }, [malshabId]);

  const getEventByDate = (date) => (
    events?.find((event) => datesAreOnSameDay(new Date(event.time), new Date(date)))
  );

  const handleMonthChange = (firstDayOfMonth) => {
    setSelectedDays(getSelectedDays(events, firstDayOfMonth));
  };

  const getCalenderDiv = () => (
    <div className={classes.calenderDiv}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Calendar
          date={selectedDate}
          onChange={setSelectedDate}
          onMonthChange={handleMonthChange}
          renderDay={(day, selectedDateProp, isInCurrentMonth, dayComponent) => {
            const date = new Date(day);
            const isSelected = isInCurrentMonth && selectedDays.includes(date.getDate());

            return (
              <Tooltip title={getEventByDate(date)?.node.name || ''}>
                <Badge color='secondary' variant='dot' invisible={!isSelected}>
                  {dayComponent}
                </Badge>
              </Tooltip>
            );
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );

  return (
    <div className={classes.root}>
      {events.length > 0 && getCalenderDiv()}
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
