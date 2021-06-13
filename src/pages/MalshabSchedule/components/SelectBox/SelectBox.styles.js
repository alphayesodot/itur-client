import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& label.Mui-focused': {
      color: '#27b9d1',
    },
    width: '6rem',
  },
}));

export default useStyles;
