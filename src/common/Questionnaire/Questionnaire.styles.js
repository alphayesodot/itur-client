import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '27.5rem',
    direction: 'rtl',
  },
  interviewScheduleBtn: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '20px',
    width: '6rem',
    height: '2.2rem',
    '&:hover': {
      backgroundColor: '#cc9432',
      color: '#fff',
    },
    fontSize: '0.75rem',
  },
  label: {
    transitionDuration: '0.3s',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  questionsHeader: {
    color: theme.palette.primary.secondary,
    fontWeight: 500,
  },
  list: {
    overflowY: 'scroll',
    margin: 0,
    padding: '0 1rem 0 1rem',
    height: '26rem',
    paddingLeft: '1rem',
    '&::-webkit-scrollbar': {
      width: '0.5rem',
      backgroundColor: '#ffffff12',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#ffffff12',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.secondary,
      borderRadius: '5px',
      width: '0.5rem',
    },
  },
}));

export default useStyles;
