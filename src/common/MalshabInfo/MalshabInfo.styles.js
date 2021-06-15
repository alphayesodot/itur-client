import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
  },
  fields: {
    width: '75%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1%',
    minWidth: '15%',
  },
  fieldTitle: {
    fontWeight: '600',
    userSelect: 'none',
  },
  fieldValue: {
    border: '0.1px solid black',
    borderRadius: '5px',
  },
  attachments: {
    width: '25%',
    margin: '0 2%',
  },
  attachmentsTitle: {
    userSelect: 'none',
    fontWeight: '900',
    fontSize: '1.15rem',
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
