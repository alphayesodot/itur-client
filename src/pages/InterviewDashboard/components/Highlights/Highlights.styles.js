import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
      borderRadius: '5px',
      backgroundColor: '#ffffff05',
      height: '0.3rem',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '5px',
      background: '#fcb3337a',
    },
    transform: [{ rotate: '-90deg' }],
  },
  data: {
    transform: [{ rotate: '90deg' }],
  },
}));

export default useStyles;
