import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  li: {
    display: 'flex',
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
    flex: '1',
    fontSize: '1rem',
    marginLeft: '1rem',
    cursor: 'inherit',
    textAlign: 'left',
    direction: 'ltr',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  dateInput: {
    backgroundColor: 'transparent',
    fontSize: '12.8px',
    direction: 'ltr',
    width: 'fit-content',
    '& > input': { textAlign: 'right', width: '60px' },
    '& > div > button': { color: '#02aecd' },
  },
  expandButton: {
    float: 'right',
  },
}));

export default useStyles;
