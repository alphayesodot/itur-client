import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    fontWeight: '900',
    paddingLeft: '1%',
    paddingBottom: '2%',
    position: 'relative',
  },
  iconButton: {
    background: theme.palette.secondary.main,
    color: 'black',
    position: 'absolute',
    padding: '0.5%',
    right: 0,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  attachmentsCard: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    overflowY: 'auto',
    background: theme.palette.primary.main,
    width: '100%',
    height: '95%',
    maxHeight: '15rem',
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
    margin: 'auto',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
}));

export default useStyles;
