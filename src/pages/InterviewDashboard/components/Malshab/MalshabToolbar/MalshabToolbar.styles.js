import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  label: {
    transitionDuration: '0.3s',
  },
  toolbar: {
    direction: 'rtl',
    height: '5rem',
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
  marginL: {
    marginLeft: '0.8rem',
  },
  marginLSmall: {
    marginLeft: '0.2rem',
  },
  toolbarContainer: {
    display: 'inline-flex',
  },
}));

export default useStyles;
