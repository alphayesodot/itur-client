import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.scrollbar.secondary,
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
