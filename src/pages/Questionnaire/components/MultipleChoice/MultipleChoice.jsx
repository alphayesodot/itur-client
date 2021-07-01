import React, { useState, useEffect } from 'react';
import { Input, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, IconButton, Checkbox } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from './MultipleChoice.styles.js';

const MultipleChoice = ({ options, setOptions, answer, setAnswer, multipleAnswers }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const enterChar = 13;
  const [optionToAdd, setOptionToAdd] = useState();
  useEffect(() => { setAnswer([]); }, []);
  const deleteFromOptions = (idx) => {
    const tmpOptions = [...options];
    tmpOptions.splice(idx, 1);
    setOptions(tmpOptions);
  };
  const handleMultipleAnswers = (option) => {
    const indexOfOption = answer.indexOf(option);
    if (indexOfOption > -1) {
      const tmpAnswers = [...answer];
      tmpAnswers.splice(indexOfOption, 1);
      setAnswer(tmpAnswers);
    } else {
      const tmpAnswers = [...answer];
      tmpAnswers.push(option);
      setAnswer(tmpAnswers);
    }
  };
  return (
    <div className={classes.root}>
      <Input
        className={classes.input}
        disableUnderline
        placeholder={t('placeholders.enterAnswer')}
        value={optionToAdd}
        onChange={(e) => {
          setOptionToAdd(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.charCode === enterChar) {
            setOptions([...options, optionToAdd]);
            setOptionToAdd('');
          }
        }}
      />
      {options.length
        ? (
          <FormControl className={classes.radioContainer} component='fieldset'>
            <FormLabel component='legend'>{t('question.answers')}</FormLabel>
            <RadioGroup
              className={classes.label}
              name='answers'
              value={answer}
              onChange={(event) => { setAnswer(event.target.value); }}
            >
              {options.map((option, idx) => (
                <div className={classes.radioOption}>
                  {multipleAnswers
                    ? (
                      <FormControlLabel
                        classes={{ root: classes.checkboxContainer }}
                        control={(
                          <Checkbox
                            classes={{ root: classes.radio, checked: classes.checked }}
                            checked={answer.includes(option)}
                            onChange={() => { handleMultipleAnswers(option, idx); }}
                          />
)}
                        label={option}
                      />
                    )
                    : (
                      <FormControlLabel
                        value={option}
                        control={(
                          <Radio
                            disableRipple
                            classes={{ root: classes.radio, checked: classes.checked }}
                          />
)}
                        label={option}
                      />
                    )}

                  <IconButton
                    className={classes.deleteButton}
                    onClick={() => deleteFromOptions(idx)}
                  >
                    <ClearIcon size='s' className={classes.deleteIcon} />
                  </IconButton>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
        ) : <></>}

    </div>

  );
};

export default MultipleChoice;
