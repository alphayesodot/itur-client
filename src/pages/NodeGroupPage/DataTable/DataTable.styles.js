import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto 2.5em',
    width: '50%',
    direction: 'ltr',
  },
  title: {
    backgroundColor: theme.palette.table.main,
    borderRadius: '15px',
  },
  row: {
    '&:hover': {
      backgroundColor: theme.palette.table.secondary,
    },
  },
  titleCell: {
    padding: '0.5rem',
  },
  cell: {
    borderBottom: 'none',
  },
}));

export default useStyles;
