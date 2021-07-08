import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100%',
    direction: 'rtl',
    width: '100%',
    margin: 'auto',
    overflowY: 'auto',
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
    paddingLeft: '0.5rem',
  },
}));

export default useStyles;
