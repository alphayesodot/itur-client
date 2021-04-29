import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    backgroundColor: '#ecf4f6',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  ccc: {
    height: '5rem',
    marginTop: '2rem',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
