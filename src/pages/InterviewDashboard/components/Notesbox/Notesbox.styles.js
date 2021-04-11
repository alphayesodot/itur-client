import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.secondary,
  },
  '&::-webkit-scrollbar': {
    width: '0.5rem',
    backgroundColor: '#ffffff12',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '5px',
    width: '0.5rem',
  },
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
}));

export default useStyles;
