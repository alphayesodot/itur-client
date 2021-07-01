import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    height: '100%',
    width: '100%',
  },
  title: {
    marginRight: '0.5rem',
    fontSize: '1.2rem',
  },
  countTitle: {
    color: theme.palette.font.secondary,
  },
  content: {
    padding: '2.5em',
    paddingBottom: 0,
    textAlign: 'left',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    marginTop: '1rem',
    direction: 'ltr',
    alignItems: 'stretch',
  },
  tableContainer: {
    maxHeight: 'calc(100vh - 25rem)',
    width: '60%',
    margin: 'auto',
  },
}));

export default useStyles;
