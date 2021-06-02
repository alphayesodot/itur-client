import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '97%',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
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
  icon: {
    width: '5%',
  },
}));

export default useStyles;
