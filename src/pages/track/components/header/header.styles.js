import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    width: '95%',
    height: '4em',
    padding: '1em',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    direction: 'rtl',
  },
  unit: {
    marginRight: '3em',
    color: 'white',
    fontSize: '1em',
  },
}));

export default useStyles;
