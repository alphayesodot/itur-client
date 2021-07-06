import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },

  document: {
    '& > canvas': { borderRadius: '15px' },
  },

  playerWrapper: {
    position: 'relative',
    padding: '2%',
    background: 'white',
    borderRadius: '15px',
    height: '47%',
    marginLeft: '1%',
  },

  player: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
