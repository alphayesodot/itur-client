import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'space-between',
    textOverflow: 'ellipsis',
    direction: 'rtl',
  },
}));

export default useStyles;
