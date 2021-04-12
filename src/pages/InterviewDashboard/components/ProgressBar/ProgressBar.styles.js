import { makeStyles } from '@material-ui/core/styles';
import { StepLabel } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import theme from '../../../../theme';

export const StyledStepLabel = styled(StepLabel)({
  '& .MuiStepLabel-label': {
    fontSize: '0.8rem',
    color: '#ffffffa6',
    marginTop: '0rem',
    lineHeight: '1.2',
    direction: 'rtl',
  },
  '& .MuiStepLabel-active': {
    color: theme.palette.primary.secondary,
  },
  '& .MuiStepLabel-completed': {
    color: '#00AFCC',
  },
});

const useStyles = makeStyles(() => ({
  noData: {
    color: '#fff3',
    textAlign: 'center',
  },
}));

export default useStyles;
