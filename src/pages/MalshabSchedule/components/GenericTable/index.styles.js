import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '77.5%',
    direction: 'rtl',
  },
  tableHead: {
    backgroundColor: `${theme.palette.card.header} !important`,
  },
}));

export default useStyles;
