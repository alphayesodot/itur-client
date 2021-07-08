import { Step, Stepper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QontoConnector, useQontoStepIconStyles } from './Qonto/Qonto.styles';
import StyledStepLabel from './ProgressStepper.styles';
import QontoStepIcon from './Qonto/QontoStepIcon';
import getStepByMinutesPassed from './ProgressStepper.utils';

const ProgressStepper = ({ date }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useQontoStepIconStyles();
  const { t } = useTranslation();
  const steps = [
    t('interviewDashboard.progressBar.interviewStart'),
    t('interviewDashboard.progressBar.stepOne'),
    t('interviewDashboard.progressBar.stepTwo'),
    t('interviewDashboard.progressBar.interviewEnd'),
  ];

  useEffect(() => {
    setActiveStep(getStepByMinutesPassed(date));
    setInterval(() => {
      setActiveStep(getStepByMinutesPassed(date));
    }, 60000);
  }, [date]);

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<QontoConnector />}
      className={classes.stepper}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StyledStepLabel StepIconComponent={QontoStepIcon} style={{ whiteSpace: 'pre-line' }}>
            {label}
          </StyledStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ProgressStepper;
