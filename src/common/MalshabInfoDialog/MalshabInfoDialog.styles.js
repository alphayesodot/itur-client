import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
    },
  },
  dialogPaper: {
    minWidth: '70%',
    minHeight: '70%',
    [theme.breakpoints.down('sm')]: {
      minHeight: '90%',
    },
  },
  infoIcon: {
    width: '1.75rem',
    height: '1.75rem',
    marginRight: '1rem',
    marginLeft: '1rem',
  },
  dialogTitle: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    fontSize: '1.5rem',
  },
  attachments: {
    width: '25%',
    margin: '0 2%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '1%',
    },
  },
  rootAttachments: {
    width: '100%',
    height: '100%',
    minHeight: '100%',
  },
}));

export default useStyles;
