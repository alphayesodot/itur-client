import React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './InterviewRaw.styles';

const InterviewRaw = ({ interview }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {JSON.stringify(interview)}
    </div>
  );
};

export default InterviewRaw;
