import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  formUnitHeader: {
    minHeight: '5.5rem',
    width: '100%',
    display: 'block',
    marginBottom: '1rem',
    backgroundColor: '#0f2231',
  },
  mainInner: {
    backgroundColor: 'transparent',
    height: 'calc(100vh - 15em)',
    display: 'flex',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
  },
  malshabimCard: {
    marginRight: '2rem',
    width: '50%',
    backgroundColor: 'white',
    padding: '1.5rem 1.9rem 1.5rem 1.9rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginBottom: '2rem',
      width: '100%',
      height: '65%',
      padding: '0',
    },
  },
  malshabimTopRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
    height: '10%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  malshabimText: {
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    '& span': {
      fontWeight: '200',
      paddingLeft: '0.5rem',
    },
  },
  usersCard: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '40%',
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
