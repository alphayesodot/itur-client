import React, { useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  Calendar,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Badge, Tooltip } from '@material-ui/core';

const Calender = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState([]);

  const getSelectedDays = (dayOfTheMonth) => {
    const month = dayOfTheMonth.getMonth();
    const year = dayOfTheMonth.getFullYear();
    const eventsOfTheSameMonth = events.filter((event) => new Date(event.time).getMonth() === month
    && new Date(event.time).getFullYear() === year);

    return eventsOfTheSameMonth.map((event) => new Date(event.time).getDate());
  };

  useEffect(() => {
    setSelectedDate(new Date(events[0]?.time));
    setSelectedDays(getSelectedDays(new Date()));
  }, [events]);

  const datesAreOnSameDay = (first, second) => first.getFullYear() === second.getFullYear()
  && first.getMonth() === second.getMonth()
  && first.getDate() === second.getDate();

  const getEventByDate = (date) => (
    events?.find((event) => datesAreOnSameDay(new Date(event.time), new Date(date)))
  );

  const handleMonthChange = (firstDayOfMonth) => {
    setSelectedDays(getSelectedDays(firstDayOfMonth));
  };

  return (
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
  );
};

export default Calender;
