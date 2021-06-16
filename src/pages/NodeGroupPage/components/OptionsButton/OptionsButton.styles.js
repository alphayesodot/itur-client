import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '1rem',
    padding: 'auto 0.1rem',
  },
  menu: {
    borderRadius: '15px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '5rem',
  },
  img: {
    paddingRight: '0.5rem',
  },
}));

export default useStyles;
