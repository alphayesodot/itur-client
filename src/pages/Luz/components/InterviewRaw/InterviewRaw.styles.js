import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '800',
    width: '20%',
  },
  identityNumber: {
    width: '80%',
    color: theme.palette.font.secondary,
  },
}));

export default useStyles;
