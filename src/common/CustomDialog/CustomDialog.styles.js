import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 15,
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      width: '28%',
    },
  },
  titleDiv: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    direction: 'rtl',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  closeIcon: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.font.secondary,
    },
  },
}));

export default useStyles;
