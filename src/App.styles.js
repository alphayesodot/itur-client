import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      background: theme.palette.primary.light,
      'border-radius': '10em',
    },
    '*::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
      'border-radius': '10em',
    },
  },
  toastContainer: {
    top: '6rem',

  },
  root: {
  },
}));

export default useStyles;
