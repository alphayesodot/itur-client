import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.3em',
      height: '0.5em',
    },
    '*::-webkit-scrollbar-track': {
      background: theme.palette.scrollbar.secondary,
      'border-radius': '50em',
    },
    '*::-webkit-scrollbar-thumb': {
      background: theme.palette.scrollbar.main,
      'border-radius': '50em',
    },
  },
  toastContainer: {
    top: '6rem',
  },
  root: {
  },
}));

export default useStyles;
