import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    userSelect: 'none',
    fontWeight: '900',
    paddingLeft: '1%',
    paddingBottom: '2%',
  },
  attachmentsCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    background: theme.palette.primary.main,
    width: '100%',
    height: '95%',
  },
  attachment: {
    display: 'flex',
    padding: '3%',
  },
  attachmentIcon: {
    width: '1rem',
    height: '1rem',
    paddingRight: '5%',
  },
  link: {
    color: 'white',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  message: {
    paddingTop: '20%',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
}));

export default useStyles;
