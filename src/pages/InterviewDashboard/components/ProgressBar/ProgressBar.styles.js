import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '5rem',
    marginTop: '2rem',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
