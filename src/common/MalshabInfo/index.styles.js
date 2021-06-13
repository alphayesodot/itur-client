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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    background: theme.palette.primary.main,
    width: '100%',
    height: '90%',
    marginBottom: '1%',
  },
  attachment: {
    display: 'flex',
    alignItems: 'center',
    padding: '3%',
  },
  attachmentIcon: {
    width: '1rem',
    height: '1rem',
    paddingRight: '3%',
  },
  link: {
    color: 'white',
    textDecoration: 'underline',
  },
}));

export default useStyles;
