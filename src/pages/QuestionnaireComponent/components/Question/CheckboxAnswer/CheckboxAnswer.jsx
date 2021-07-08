import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { v4 as uuid } from 'uuid';

const CheckboxAnswer = ({ options, selectedValues, setSelectedValues }) => {
  // const [selectedValues, setSelectedValues] = useState([]);

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
          label={<span style={{ fontSize: '0.7rem' }}>{option}</span>}
          labelPlacement='start'
        />
      ))}
    </div>
  );
};

export default CheckboxAnswer;
