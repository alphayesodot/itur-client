import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { v4 as uuid } from 'uuid';

const CheckboxAnswer = ({ options, selectedValues, setSelectedValues }) => {
  const [customAnswer, setCustomAnswer] = useState('');
  const handleChange = (event) => {
    const { value } = event.target;

    const newSelectedValues = selectedValues.slice();
    const index = selectedValues.indexOf(value);

    if (index >= 0) newSelectedValues.splice(index, 1);
    else newSelectedValues.push(value);

    setSelectedValues(newSelectedValues);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'space-between',
        textOverflow: 'ellipsis',
      }}
    >
      <FormGroup style={{ direction: 'ltr' }}>
        {options.map((option) => (
          <FormControlLabel
            value='start'
            key={uuid()}
            control={
              <Checkbox
                checked={selectedValues.includes(option)}
                onChange={handleChange}
                value={option}
                size='small'
                style={{ color: '#02aecd' }}
              />
            }
            label={<span style={{ fontSize: '1rem' }}>{option}</span>}
            labelPlacement='start'
          />
        ))}
        <FormControlLabel
          value='start'
          key={uuid()}
          control={
            <Checkbox
              checked={selectedValues.includes(customAnswer)}
              onChange={handleChange}
              value={customAnswer}
              size='small'
              style={{ color: '#02aecd' }}
            />
          }
          label={
            <TextField
              value={customAnswer}
              onChange={(e) => setCustomAnswer(e.target.value)}
              style={{ direction: 'rtl' }}
            />
          }
          labelPlacement='start'
        />
      </FormGroup>
    </div>
  );
};

export default CheckboxAnswer;
