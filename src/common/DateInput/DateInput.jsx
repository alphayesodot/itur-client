import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
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

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        format='dd/MM/yyyy'
        className={`${classes.date} ${inputClassName}`}
        value={selectedDate}
        onChange={setSelectedDate}
        variant='inline'
        InputProps={{
          disableUnderline: true,
        }}
      />
    </MuiPickersUtilsProvider>
  );
});

export default DateInput;
