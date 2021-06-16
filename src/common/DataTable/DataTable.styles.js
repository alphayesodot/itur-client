import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '80%',
    direction: 'rtl',
    width: '50%',
    margin: '0 2.5em',
  },
  table: {
    width: '100%',
    direction: 'ltr',
  },
  titleCell: {
    padding: '0.5rem',
    borderBottom: 'none',
    backgroundColor: theme.palette.table.main,
  },
  tableContent: {
    maxHeight: '200px',
    overflowY: 'auto',
    width: '100%',
    border: 'none',
  },
  roundBorderRight: {
    borderRadius: '10px 0 0 0',
  },
  roundBorderLeft: {
    borderRadius: '0 10px 0 0',
  },
  row: {
    '&:hover': {
      backgroundColor: theme.palette.table.secondary,
    },
  },
  cell: {
    borderBottom: 'none',
  },
}));

export default useStyles;
