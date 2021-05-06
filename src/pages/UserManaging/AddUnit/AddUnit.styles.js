import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: ' 12rem',
    width: '35rem',
    direction: 'rtl',
  },
  addButton: {
    fontSize: '1rem',
    lineHeight: '20px',
    fontWeight: 300,
    color: '#fff',
    backgroundColor: '#27b9d1',
    borderRadius: '8px',
    padding: '0px 25px',
    height: '40px',
    position: 'absolute',
    marginRight: '-0.5rem',
    '&:hover,&:focus': {
      backgroundColor: '#27b9d1',
    },
  },
  input: {
    fontSize: '14px',
    fontWeight: 300,
    color: '#171717',
    boxSizing: 'border-box',
    padding: '0px 10px',
    textAlign: 'right',
    width: '192px',
    height: '40px',
    border: '1px solid #e7e8ea',
    borderRadius: '8px',
    backgroundColor: '#fff',
    margin: '0px',
    display: 'flexDirection',
    alignItems: 'center',
  },
  titleDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    paddingRight: '2rem',
  },
  addDiv: {
    marginRight: '2rem',
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
}));

export default useStyles;
