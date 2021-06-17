import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: ' 11rem',
    width: '33rem',
  },
  addButton: {
    fontSize: '1rem',
    lineHeight: '20px',
    fontWeight: 300,
    color: '#fff',
    backgroundColor: theme.palette.textField.focused,
    borderRadius: '8px',
    padding: '0px 25px',
    height: '40px',
    position: 'absolute',
    marginLeft: '-0.5rem',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.section.primary,
    },
  },
  input: {
    fontSize: '14px',
    fontWeight: 300,
    color: '#171717',
    boxSizing: 'border-box',
    padding: '0px 10px',
    textAlign: 'right',
    width: '13.5rem',
    height: '40px',
    border: '1px solid #e7e8ea',
    borderRadius: '8px',
    backgroundColor: '#fff',
    margin: '0px',
    display: 'flexDirection',
    alignItems: 'center',
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
  titleDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.3rem',
    paddingRight: '2rem',
  },
  addDiv: {
    marginLeft: '2rem',
  },
  title: {
    direction: 'rtl',
    fontFamily: 'Assistant',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  closeButton: {
    transform: 'rotate(45deg)',
    '&:hover,&:focus': {
      backgroundColor: 'white',
    },
  },
  addIcon: {
    height: '1.1rem',
    width: '1.1rem',
  },
  paper: {
    borderRadius: 15,
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      width: '28%',
    },
  },
}));

export default useStyles;
