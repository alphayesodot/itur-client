import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    direction: 'rtl',
  },
  formUnitHeader: {
    height: '5.5rem',
    width: '100%',
    display: 'block',
    marginBottom: '1rem',
    backgroundColor: '#0f2231',
  },
  mainInner: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: 'calc(100vh - 15em)',
    },
  },
  malshabimCard: {
    marginLeft: '2rem',
    height: '100%',
    width: '50%',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      width: '100%',
      marginBottom: '1rem',
    },
    padding: '2.5rem 1.9rem 1.5rem 1.9rem',
  },

  malshabimTopRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
    position: 'relative',
  },

  malshabimText: {
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    '& span': {
      fontWeight: '200',
      paddingRight: '0.5rem',
    },
  },

  usersCard: {
    width: '50%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  formControlNameOrId: {
    paddingLeft: '0.38rem',
  },

  formNameOrIdInputText: {
    fontWeight: '300',
    width: '10.6rem',
  },

  formNameOrIdInputLabel: {
    '&.Mui-focused': {
      color: '#27b9d1',
    },
  },

  selectHour: {
    width: '5rem',
    '& label.Mui-focused': {
      color: '#27b9d1',
    },
    paddingLeft: '0.38rem',
  },

  selectUsers: {
    width: '5rem',
    '& label.Mui-focused': {
      color: '#27b9d1',
    },
    paddingLeft: '0.38rem',
  },

  isScheduled: {
    width: '6rem',
    '& label.Mui-focused': {
      color: '#27b9d1',
    },
    paddingLeft: '0.38rem',
  },

}));

export default useStyles;
