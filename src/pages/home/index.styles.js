import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  headline: {
    color: theme.palette.primary.main,
    fontSize: '5em',
  },
}));

export default useStyles;
