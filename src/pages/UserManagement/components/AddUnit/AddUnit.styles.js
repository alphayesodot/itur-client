import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addButton: {
    fontSize: '1rem',
    lineHeight: '20px',
    fontWeight: 300,
    color: '#fff',
    backgroundColor: '#27b9d1',
    borderRadius: '8px',
    padding: '0 25px',
    height: '40px',
    marginLeft: '-0.5rem',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.section.primary,
    },
    [theme.breakpoints.down('sm')]: {
      width: '65%',
      margin: '0.25rem auto',
    },
  },
  input: {
    fontSize: '14px',
    fontWeight: 300,
    color: '#171717',
    boxSizing: 'border-box',
    padding: '0 10px',
    textAlign: 'right',
    width: '13.5rem',
    height: '40px',
    border: '1px solid #e7e8ea',
    borderRadius: '8px',
    backgroundColor: '#fff',
    margin: '0',
    alignItems: 'center',
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: '65%',
      margin: 'auto',
    },
  },
  content: {
    display: 'flex',
    height: '5rem',
    width: '25rem',
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 'auto',
      marginBottom: '1rem',
    },
  },
}));

export default useStyles;
