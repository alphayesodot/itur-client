import React, { useState } from 'react';
import { Input, FormControlLabel, FormControl, IconButton, Switch } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from './MultipleChoice.styles.js';

const MultipleChoice = ({
  options,
  setOptions,
  hasOther,
  setHasOther,
  emptyOptionsError,
  setEmptyOptionsError,
  showErrors }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const enterChar = 13;
  const [optionToAdd, setOptionToAdd] = useState('');
  const deleteFromOptions = (idx) => {
    const tmpOptions = [...options];
    tmpOptions.splice(idx, 1);
    setOptions(tmpOptions);
    if (!tmpOptions.length) {
      setEmptyOptionsError(true);
    }
  };

  return (
    <div className={classes.root}>
      <FormControl component='fieldset'>
        <FormControlLabel
          className={classes.switchLabel}
          value='end'
          control={(
            <Switch
              classes={{
                colorSecondary: classes.switch,
                track: classes.track,
                checked: classes.checked,
              }}
              value={hasOther}
              onChange={() => { setHasOther(!hasOther); }}
            />
          )}
          label={t('question.otherOption')}
          labelPlacement='start'
        />
      </FormControl>
      <Input
        classes={{ root: classes.input, error: classes.inputError }}
        disableUnderline
        placeholder={t('placeholders.enterAnswer')}
        value={optionToAdd}
        error={showErrors && emptyOptionsError}
        onChange={(e) => {
          setOptionToAdd(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.charCode === enterChar) {
            setOptions(options ? [...options, optionToAdd] : [optionToAdd]);
            setEmptyOptionsError(false);
            setOptionToAdd('');
          }
        }}
      />
      {options?.length
        ? (
          <div className={classes.answers}>
            <span>{t('question.answers')}</span>
            {options.map((option, idx) => (
              <div className={classes.option} key={option}>
                <span className={classes.label}>{`${idx + 1}. ${option}`}</span>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => {
                    deleteFromOptions(idx);
                  }}
                >
                  <ClearIcon className={classes.deleteIcon} />
                </IconButton>
              </div>
            ))}
          </div>
        ) : <></>}
    </div>
  );
};

export default MultipleChoice;
