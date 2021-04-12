import { makeStyles, StepConnector, withStyles } from '@material-ui/core';
import theme from '../../../../../theme';

export const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  stepper: {
    background: 'none',
    padding: '15px',
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

export const QontoConnector = withStyles({
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
