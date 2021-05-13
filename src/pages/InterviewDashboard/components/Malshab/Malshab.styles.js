import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
  },
  label: {
    transitionDuration: '0.3s',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  interviewScheduleBtn: {
    backgroundColor: '#E51515',
    fontWeight: '200',
    color: '#fff',
    borderRadius: '20px',
    width: '6rem',
    height: '2.2rem',
    '&:hover': {
      backgroundColor: '#ca1313',
      color: '#EDF4F5',
    },
    fontSize: '0.75rem',
  },
}));

export default useStyles;
