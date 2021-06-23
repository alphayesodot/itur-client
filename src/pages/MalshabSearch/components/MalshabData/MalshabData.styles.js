import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      minHeight: '25rem',
    },
  },
  content: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  bottomSection: {
    marginTop: '1%',
    display: 'flex',
  },
  message: {
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: 700,
    color: 'lightgrey',
    userSelect: 'none',
    margin: 'auto',
  },
}));

export default useStyles;
