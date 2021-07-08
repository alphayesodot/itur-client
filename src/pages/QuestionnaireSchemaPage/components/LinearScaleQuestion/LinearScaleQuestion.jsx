import React from 'react';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './LinearScaleQuestion.styles.js';

const LinearScaleQuestion = ({ linearScale, setLinearScale }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const setMinVal = (val) => {
    const tmpScale = { ...linearScale };
    tmpScale.minVal = val;
    setLinearScale(tmpScale);
  };

  const setMaxVal = (val) => {
    const tmpScale = { ...linearScale };
    tmpScale.maxVal = val;
    setLinearScale(tmpScale);
  };

  const setMinTitle = (title) => {
    const tmpScale = { ...linearScale };
    tmpScale.minTitle = title;
    setLinearScale(tmpScale);
  };

  const setMaxTitle = (title) => {
    const tmpScale = { ...linearScale };
    tmpScale.maxTitle = title;
    setLinearScale(tmpScale);
  };

  const dataToMap = [
    {
      title: linearScale.minTitle,
      setTitle: setMinTitle,
      value: linearScale.minVal,
      seValue: setMinVal,
    },
    { title: linearScale.maxTitle,
      setTitle: setMaxTitle,
      value: linearScale.maxVal,
      seValue: setMaxVal,
    },
  ];

  return (
    <div className={classes.root}>
      {dataToMap.map((data) => (
        <div className={classes.minMax}>
          <div>
            <div className={classes.label}>{t('question.label')}</div>
            <TextField
              classes={{ root: classes.input }}
              InputProps={{ disableUnderline: true }}
              autoFocus
              disableUnderline
              margin='dense'
              type='text'
              variant='standard'
              fullWidth
              value={data.title}
              onChange={(e) => { data.setTitle(e.target.value); }}
            />
          </div>
          <div>
            <div className={classes.label}>{t('question.minValue')}</div>
            <TextField
              classes={{ root: classes.input }}
              InputProps={{ disableUnderline: true }}
              autoFocus
              disableUnderline
              margin='dense'
              type='number'
              variant='standard'
              fullWidth
              value={data.value}
              onChange={(e) => { data.seValue(e.target.value); }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinearScaleQuestion;
