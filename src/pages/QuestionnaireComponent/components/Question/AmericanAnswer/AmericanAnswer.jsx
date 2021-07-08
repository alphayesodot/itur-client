// /* eslint-disable no-unused-vars */
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { v4 as uuid } from 'uuid';

const AmericanAnswer = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState('a');

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
          label={<span style={{ fontSize: '0.7rem' }}>{option}</span>}
          labelPlacement='start'
        />
      ))}
    </div>
  );
};

export default AmericanAnswer;
