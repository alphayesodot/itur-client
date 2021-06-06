import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '97%',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4.5rem',
    borderRadius: 15,
    margin: '0.5rem auto',
  },
  time: {
    marginLeft: '3rem',
  },
  name: {
    fontWeight: '800',
    width: '30%',
  },
  identityNumber: {
    width: '80%',
    color: theme.palette.font.secondary,
  },
  identityNumberDURING: {
    color: 'white',
  },
  iconButton: {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '8%',
  },
  icon: {
    width: '5%',
  },
  iconsSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '25%',
  },
  button: {
    background: theme.palette.primary.secondary,
    borderRadius: 30,
    width: '5rem',
    marginRight: '7%',
    fontWeight: '800',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.secondary,
    },
  },
}));

export default useStyles;
