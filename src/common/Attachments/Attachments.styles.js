import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  sectionTitle: {
    fontWeight: '900',
    paddingLeft: '1%',
    paddingBottom: '2%',
  },
  iconButton: {
    position: 'absolute',
    background: theme.palette.secondary.main,
    padding: '0.5%',
    right: '2rem',
    bottom: 0,
    width: '2.25rem',
    height: '2.25rem',
    color: 'white',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  attachmentsCard: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    overflowY: 'auto',
    background: theme.palette.primary.main,
    width: '100%',
    height: '95%',
  },
  attachment: {
    display: 'flex',
    padding: '3%',
    alignItems: 'center',
  },
  attachmentIcon: {
    width: '1.15rem',
    height: '1.15rem',
    paddingRight: '5%',
  },
  link: {
    color: 'white',
    textAlign: 'left',
    fontSize: '1.05rem',
    textDecoration: 'underline',
  },
  message: {
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
  },
}));

export default useStyles;
