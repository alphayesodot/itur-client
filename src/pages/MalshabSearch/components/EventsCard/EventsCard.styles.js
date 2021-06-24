import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '2%',
    width: '100%',
    height: '100%',
    minHeight: '100%',
  },
  sectionTitle: {
    userSelect: 'none',
    fontWeight: '900',
    paddingLeft: '1%',
    paddingBottom: '2%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    background: theme.palette.table.main,
    width: '100%',
    height: '95%',
  },
  row: {
    width: '90%',
    padding: '1%',
  },
  mainData: {
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    whiteSpace: 'pre',
  },
  divider: {
    width: '100%',
  },
}));

export default useStyles;
