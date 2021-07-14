import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  li: {
    backgroundColor: 'rgb(255 255 255 / 5%)',
    borderRadius: '10px',
    marginBottom: '0.4rem',
    '&:hover': {
      backgroundColor: 'rgb(255 255 255 / 20%)',
    },
    justifyContent: 'space-around',
    color: 'white',
    direction: 'ltr',
    padding: '5px',
    height: '2.2rem',
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
    fontSize: '1rem',
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
    fontSize: '12.8px',
    '& > input': { textAlign: 'right', width: '60px' },
    '& > div > button': { color: '#02aecd' },
  },
  expandButton: {
    float: 'right',
  },
}));

export default useStyles;
