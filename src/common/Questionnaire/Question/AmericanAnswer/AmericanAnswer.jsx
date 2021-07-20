/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import useStyles from './AmericanAnswer.styles';

const AmericanAnswer = ({
  options,
  selectedValue,
  setSelectedValue,
  hasOther,
  required,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [customAnswer, setCustomAnswer] = useState('');

  useEffect(() => {
    if (!options.includes(selectedValue) && selectedValue !== '') {
      setCustomAnswer(selectedValue);
    } else setCustomAnswer(' ');
  }, [customAnswer]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl className={classes.root} required={required}>
      {options.map((option, index) => (
        <FormControlLabel
          value='start'
          key={index}
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
      {hasOther ?? (
        <FormControlLabel
          value='start'
          key='custom'
          control={
            <Radio
              checked={selectedValue === customAnswer}
              onChange={handleChange}
              value={customAnswer}
              size='small'
              style={{ color: '#02aecd' }}
            />
          }
          label={
            <TextField
              value={customAnswer}
              onChange={(event) => {
                if (selectedValue === customAnswer) {
                  setSelectedValue(event.target.value);
                }
                setCustomAnswer(event.target.value);
              }}
              style={{ direction: 'rtl' }}
              placeholder={t('interviewDashboard.questionnaire.otherAnswer')}
              onFocus={(event) => setSelectedValue(event.target.value)}
              onSelect={(event) => setSelectedValue(event.target.value)}
            />
          }
          labelPlacement='start'
        />
      )}
    </FormControl>
  );
};

export default AmericanAnswer;
