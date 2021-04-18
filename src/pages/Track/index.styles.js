import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '3em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: theme.direction,
  },
}));

export default useStyles;
