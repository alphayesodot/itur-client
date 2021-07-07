import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.dialog.secondaryLight,
    padding: '1rem',
    height: '100%',
    maxHeight: '7.2rem',
    marginTop: '0.5rem',
  },
  internalNodeContainer: {
    overflowY: 'auto',
    direction: 'rtl',
    height: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  checkboxContainer: {
    marginLeft: '1rem',
    direction: 'ltr',
    width: '25%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
