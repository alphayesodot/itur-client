import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '1.1rem',
    paddingBottom: '1rem',
    '& span': {
      fontWeight: 'normal',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    backgroundColor: '#f3f5f7',
    padding: '0.5rem 2rem',
    borderRadius: '8px',
    direction: 'rtl',
    margin: '0 2rem',
  },
  moreDetailsBtn: {
    color: '#00afcc',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  },
  relevantFiles: {
    color: '#000',
    textDecoration: 'underline',
    fontSize: '0.7rem',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'transparent',
    },
  },
  detailsRowItem: {
    paddingLeft: '0.5rem',
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  select: {
    width: '12rem',
    height: '2.5em',
    background: 'white',
  },
  icon: {
    fill: '#9aa3aa',
    width: '170%',
  },
  moreDetails: {
    fontWeight: '700',
  },
  malshabDataContainer: {
    paddingTop: '20px',
    paddingRight: '32px',
    alignItems: 'stretch',
    direction: 'rtl',
  },
  flexOne: {
    flex: 1,
  },
  dataParameter: {
    marginRight: '0.5rem',
  },
  miniParameter: {
    fontSize: '0.8rem',
  },
  fileSection: {
    paddingRight: '5rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: 0,
    maxWidth: '15rem',
    overflow: 'auto',
    maxHeight: '5rem',
    marginLeft: '1rem',
  },
  fileContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingBottom: '1rem',
  },
  fileImg: {
    marginLeft: '0.2rem',
  },
  listItem: {
    fontSize: '15px',
    lineHeight: '18px',
    fontWeight: 'bold',
    paddingBottom: '13px',
  },
}));

export default useStyles;
