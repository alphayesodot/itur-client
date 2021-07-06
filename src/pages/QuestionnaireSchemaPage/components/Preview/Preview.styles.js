import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.dialog.secondaryLight,
    height: '100%',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  titleProp: {
    margin: '0 0.5rem',
  },
  tableContainer: {
    maxHeight: '90%',
    width: '100%',
  },
  noQuesitonsContainer: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
