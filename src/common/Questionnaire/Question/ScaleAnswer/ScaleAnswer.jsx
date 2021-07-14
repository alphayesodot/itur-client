import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { v4 as uuid } from 'uuid';
import useStyles from './ScaleAnswer.styles';

const ScaleAnswer = ({ min, max }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // eslint-disable-next-line prefer-spread
  const rangeArr = Array.apply(null, { length: max.value + 1 })
    .map(Number.call, Number)
    .slice(min.value);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'space-between',
        textOverflow: 'ellipsis',
        direction: 'rtl',
      }}
    >
      <Typography className={classes.label}>{min.tag}</Typography>
      <div>
        {rangeArr.map((val) => (
          <FormControlLabel
            value='start'
            key={uuid()}
            control={
              <Radio
                checked={+selectedValue === val}
                onChange={handleChange}
                value={val}
                size='small'
                name='radio'
                style={{ color: '#02aecd' }}
              />
            }
          />
        ))}
      </div>
      <Typography className={classes.label}>{max.tag}</Typography>
    </div>
  );
};

export default ScaleAnswer;
