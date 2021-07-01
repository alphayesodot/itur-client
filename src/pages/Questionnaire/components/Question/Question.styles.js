import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexDirection: 'column',
  },
  question: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  answers: {
    direction: 'ltr',
    margin: '0.5rem auto',
    marginLeft: '3.4rem',
    marginRight: '6.4rem',
    display: 'flex',
  },
  select: {
    backgroundColor: 'white',
    width: '20%',
    margin: '0 0.5rem',
    borderRadius: '15px',
    border: '3px solid',
    padding: '0.3rem',
    paddingLeft: '1rem',
    borderColor: theme.palette.dialog.secondaryMid,
  },
  input: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: '15px',
    direction: 'ltr',
    border: '3px solid',
    margin: 0,
    padding: '0.3rem',
    paddingLeft: '1rem',
    borderColor: theme.palette.dialog.secondaryMid,
  },
  accordion: {
    direction: 'ltr',
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    minHeight: 0,
  },
  accordionUnchange: {
    padding: 0,
    minHeight: 0,
    margin: 0,
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
  },
  accordionSummary: {
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
  deleteIcon: {
    marginRight: '0.5rem',
    marginLeft: 0,
    width: '1.2rem',
  },
  hidden: {
    visibility: 'hidden',
  },
  checkbox: {
    '&$checkedCheckbox': {
      color: theme.palette.dialog.primary,
    },
  },
  // This object is needed although it's empty. It is needed for override the default color.
  checkedCheckbox: {
  },

}));

export default useStyles;
