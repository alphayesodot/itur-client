import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    background: 'rgb(2 174 205 / 10%)',
    borderRadius: '5px',
  },

  multilineColor: {
    color: 'white',
    fontSize: '12.8px',
    width: '100%',
    '&:before': {
      borderBottom: '2px solid #02aecd',
    },
  },
}));

export default useStyles;
