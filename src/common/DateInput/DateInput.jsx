import React from 'react';
import { TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import useStyles from './DateInput.styles';

/**
 * @param {*} selectedDate: selected date state
 * @param {*} setSelectedDate: set selected date's state function
 * @param {*} inputClassName: optional, additional input's class name defined by makestyles
 * @returns date select
 */
const DateInput = observer(({ selectedDate, setSelectedDate, inputClassName }) => {
  const classes = useStyles();

  const handleOnDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <TextField
      className={`${classes.date} ${inputClassName}`}
      type='date'
      onChange={handleOnDateChange}
      value={selectedDate}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
});

export default DateInput;
