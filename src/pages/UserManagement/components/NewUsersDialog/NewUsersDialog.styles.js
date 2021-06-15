import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  content: {
    height: '22rem',
    flex: 1,
  },
  mainDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '10%',
  },
  savePassWarning: {
    fontSize: '1.1rem',
  },
  alert: {
    marginBottom: '15%',
  },
}));

export default useStyles;
