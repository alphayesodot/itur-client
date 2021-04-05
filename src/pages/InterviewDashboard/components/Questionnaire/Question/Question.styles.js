import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  li: {
    backgroundColor: 'rgb(255 255 255 / 5%)',
    borderRadius: '10px',
    height: '2.5rem',
    marginBottom: '0.4rem',
    '&:hover': {
      backgroundColor: 'rgb(255 255 255 / 20%)',
    },
  },
  qaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  question: {
    fontSize: '0.7rem',
    cursor: 'inherit',
  },
}));

export default useStyles;
