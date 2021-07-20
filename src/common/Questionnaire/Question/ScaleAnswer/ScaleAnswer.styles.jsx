import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'space-between',
    textOverflow: 'ellipsis',
    direction: 'rtl',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scale: {
    paddingLeft: '15px',
  },
  label: {
    fontSize: '1rem',
    paddingTop: '8px',
    marginRight: '5px',
  },
}));

export default useStyles;
