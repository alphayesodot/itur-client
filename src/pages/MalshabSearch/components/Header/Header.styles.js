import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: theme.palette.primary.main,
    width: '100%',
    height: '2rem', // remove
  },
}));

export default useStyles;
