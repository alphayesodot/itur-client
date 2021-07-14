import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { v4 as uuid } from 'uuid';

const AmericanAnswer = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
              <Radio
                checked={selectedValue === option}
                onChange={handleChange}
                value={option}
                size='small'
                name='a'
                style={{ color: '#02aecd' }}
              />
            }
            label={<span style={{ fontSize: '1rem' }}>{option}</span>}
            labelPlacement='start'
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default AmericanAnswer;
