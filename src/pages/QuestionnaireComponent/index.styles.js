import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    width: '100%',
  },
  button: {
    background: theme.palette.secondary.main,
    borderRadius: 30,
    padding: '8px 15px',
    fontWeight: 600,
  },
  titleBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px 20px 20px 20px',
    boxSizing: 'border-box',
  },
}));

export default useStyles;
