import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  content: {
    height: '5rem',
    width: '33rem',
    marginLeft: '2rem',
  },
}));

export default useStyles;
