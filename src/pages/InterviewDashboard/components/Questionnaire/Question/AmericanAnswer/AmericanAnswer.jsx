// /* eslint-disable no-unused-vars */
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const AmericanAnswer = () => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <FormControlLabel
        value='start'
        control={(
          <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value='a'
            size='small'
            name='a'
            style={{ color: '#02aecd' }}
          />
        )}
        label={<span style={{ fontSize: '0.7rem' }}>כן</span>}
      />
      <FormControlLabel
        value='start'
        control={(
          <Radio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value='b'
            size='small'
            name='b'
            style={{ color: '#02aecd' }}
          />
        )}
        label={<span style={{ fontSize: '0.7rem' }}>לא</span>}
      />
    </div>
  );
};

export default AmericanAnswer;
