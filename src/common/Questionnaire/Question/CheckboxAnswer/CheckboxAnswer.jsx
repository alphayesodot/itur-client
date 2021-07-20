import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { v4 as uuid } from 'uuid';
import useStyles from './CheckboxAnswer.styles';

const CheckboxAnswer = ({
  options,
  selectedValues,
  setSelectedValues,
  hasOther,
  required,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
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
    <FormControl className={classes.root} required={required}>
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
      {hasOther ?? (
        <FormControlLabel
          value='start'
          key='custom'
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
              placeholder={t('interviewDashboard.questionnaire.otherAnswer')}
              onChange={(event) => {
                setCustomAnswer(event.target.value);
              }}
              style={{ direction: 'rtl' }}
            />
          }
          labelPlacement='start'
        />
      )}
    </FormControl>
  );
};

export default CheckboxAnswer;
