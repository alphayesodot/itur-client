import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
    height: '10%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  topRowText: {
    width: '90%',
    textAlign: 'left',
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    '& span': {
      fontWeight: '200',
      paddingLeft: '0.5rem',
    },
  },
  usersList: {
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: '90%',
    overflow: 'auto',
  },
}));

export default useStyles;
