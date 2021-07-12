import React, { useEffect } from 'react';
import { Input } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './LinearScaleQuestion.styles.js';

const LinearScaleQuestion = ({
  linearScale,
  setLinearScale,
  minMaxError,
  setMinMaxError,
  setMinMaxTitleError,
  showErrors }) => {
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

  useEffect(() => {
    setMinMaxTitleError(linearScale.minTitle.length === 0 || linearScale.maxTitle.length === 0);
  }, [linearScale]);

  const dataToMap = [
    {
      title: linearScale.minTitle,
      setTitle: setMinTitle,
      value: linearScale.minVal,
      seValue: setMinVal,
      label: t('question.minValue'),
      validCondition: (minVal) => (minVal >= linearScale.maxVal),
    },
    { title: linearScale.maxTitle,
      setTitle: setMaxTitle,
      value: linearScale.maxVal,
      seValue: setMaxVal,
      label: t('question.maxValue'),
      validCondition: (maxVal) => (maxVal <= linearScale.minVal),
    },
  ];

  return (
    <div className={classes.root}>
      {dataToMap.map((data) => (
        <div className={classes.minMax}>
          <div>
            <div className={classes.label}>{t('question.label')}</div>
            <Input
              classes={{ root: classes.input, error: classes.inputError }}
              disableUnderline
              autoFocus
              margin='dense'
              type='text'
              variant='standard'
              fullWidth
              error={showErrors && !data.title.length}
              value={data.title}
              required
              onChange={(e) => {
                data.setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <div className={classes.label}>{data.label}</div>
            <Input
              classes={{ root: classes.input, error: classes.inputError }}
              disableUnderline
              autoFocus
              margin='dense'
              type='number'
              variant='standard'
              fullWidth
              error={showErrors && minMaxError}
              value={data.value}
              onChange={(e) => {
                data.seValue(e.target.value);
                setMinMaxError(data.validCondition(e.target.value));
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinearScaleQuestion;
