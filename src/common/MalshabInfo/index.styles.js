import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  attachments: {
    height: '15rem',
    width: '40%',
    margin: '1% 2%',
  },
  attachmentsTitle: {
    fontWeight: '900',
    marginLeft: '3%',
  },
  attachmentsCard: {
    background: theme.palette.primary.main,
    width: '100%',
    height: '90%',
    marginBottom: '1%',
  },
}));

export default useStyles;
