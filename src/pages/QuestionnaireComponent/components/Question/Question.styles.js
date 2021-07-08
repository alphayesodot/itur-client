import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  li: {
    backgroundColor: 'rgb(255 255 255 / 5%)',
    borderRadius: '10px',
    // height: '2.5rem',
    marginBottom: '0.4rem',
    '&:hover': {
      backgroundColor: 'rgb(255 255 255 / 20%)',
    },
    justifyContent: 'space-around',
    color: 'white',
    direction: 'ltr',
  },
  liCollapsed: {
    height: '2.5rem',
    minHeight: '36px',
  },
  qaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  question: {
    fontSize: '0.8rem',
    marginLeft: '1rem',
    cursor: 'inherit',
    textAlign: 'left',
    direction: 'rtl',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    alignSelf: 'center',
  },
  dateInput: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '12.8px',
    '& > input': { textAlign: 'right' },
    '& > div > button': { color: '#02aecd' },
  },
}));

export default useStyles;
