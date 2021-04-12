import { Step, Stepper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles, { StyledStepLabel } from './ProgressBar.styles';
import getStepByMinutesPassed from './ProgressBar.utils';
import { QontoConnector, useQontoStepIconStyles } from './Qonto/Qonto.styles';
import QontoStepIcon from './Qonto/QontoStepIcon';

const ProgressBar = ({ date, eventLoaded }) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState();
  const qontoClasses = useQontoStepIconStyles();
  const classes = useStyles();
  const steps = [
    t('interviewDashboard.progressBar.interviewStart'),
    t('interviewDashboard.progressBar.stepOne'),
    t('interviewDashboard.progressBar.stepTwo'),
    t('interviewDashboard.progressBar.interviewEnd'),
  ];

  useEffect(() => {
    setActiveStep(getStepByMinutesPassed(date));
  }, [date]);

  if (!eventLoaded) return <></>;
  return date ? (
    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} className={qontoClasses.stepper}>
      {steps.map((label) => (
        <Step key={label}>
          <StyledStepLabel StepIconComponent={QontoStepIcon} style={{ whiteSpace: 'pre-line' }}>
            {label}
          </StyledStepLabel>
        </Step>
      ))}
    </Stepper>
  ) : (
    <p className={classes.noData}>{t('interviewDashboard.progressBar.noDataAboutCurrentInterviewTimes')}</p>
  );
};

export default ProgressBar;
