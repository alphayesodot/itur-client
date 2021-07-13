import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '70vw',
    overflowY: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '90vw',
      height: '100%',
    },
  },
}));

export default useStyles;
