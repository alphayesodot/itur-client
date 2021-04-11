import { makeStyles, Step, StepConnector, StepLabel, Stepper, withStyles } from '@material-ui/core';
import { useState } from 'react';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import { styled } from '@material-ui/styles';
import theme from '../theme';

const StyledStepLabel = styled(StepLabel)({
  '& .MuiStepLabel-label': {
    fontSize: '0.8rem',
    color: '#ffffffa6',
    marginTop: '0.5rem',
  },
  '& .MuiStepLabel-active': {
    color: theme.palette.primary.secondary,
  },
  '& .MuiStepLabel-completed': {
    color: '#00AFCC',
  },
});

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  stepper: {
    background: 'none',
  },
  active: {
    color: theme.palette.primary.secondary,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#00AFCC',
    zIndex: 1,
    fontSize: 18,
  },
  white: {
    color: '#fff',
  },
});
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
    color: 'white',
  },
  active: {
    '& $line': {
      borderColor: '#00AFCC',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#00AFCC',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const Linear = () => {
  const [activeStep, setActiveStep] = useState(1);
  const classes = useQontoStepIconStyles();
  const getSteps = () => ['0m', '10m', 'שאלון', '30m'];
  const steps = getSteps();

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<QontoConnector />}
      className={classes.stepper}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StyledStepLabel style={{ color: 'white !important' }} StepIconComponent={QontoStepIcon}>
            {label}
          </StyledStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default Linear;
