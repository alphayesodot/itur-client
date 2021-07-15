import React from 'react';
import { Checkbox } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './OpenQuestion.styles.js';

const OpenQuestion = ({ isShort, setIsShort }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Checkbox
        classes={{ root: classes.checkbox, checked: classes.checkedCheckbox }}
        checked={isShort}
        onChange={() => { setIsShort(!isShort); }}
      />
      <span className={classes.label}>{t('question.shortQuestion')}</span>
    </div>
  );
};

export default OpenQuestion;
