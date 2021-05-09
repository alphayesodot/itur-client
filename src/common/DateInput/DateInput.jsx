import React from 'react';
import { TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import useStyles from './DateInput.styles';

const DateInput = observer(({ selectedDate, setSelectedDate }) => {
  const classes = useStyles();

  const handleOnDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <TextField
      className={`${classes.date} ${classes.root}`}
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
