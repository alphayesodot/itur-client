import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    background: 'rgb(2 174 205 / 10%)',
    borderRadius: '5px',
  },

  multilineColor: {
    color: 'black',
    padding: '10px',
    fontSize: '15px',
    width: '100%',
    '&:before': {
      borderBottom: '2px solid #02aecd',
    },
  },
}));

export default useStyles;
