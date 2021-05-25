import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '60rem',
    marginTop: '2rem',
    boxShadow: 'none',
  },
  addUsersButton: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
    },
    margin: '0px -2rem 0px 3rem',
    fontWeight: 'bold',
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },
  closeButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: '2rem',
    width: '2rem',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  openButton: {
    backgroundColor: theme.palette.section.primary,
    color: 'white',
    height: '2rem',
    width: '2rem',
    transform: 'rotate(-45deg)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.section.primary,
    },
  },
  numberOfRoleUsers: {
    width: '3rem',
    border: '0.2px solid lightgrey',
    borderRadius: '0.5rem',
    marginLeft: '-2rem',
  },
  addDiv: {
    display: 'flex',
    width: '70%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
    },
  },
  permissionsButton: {
    border: '1px solid rgb(76,175, 204)',
    color: 'rgb(76,175, 204)',
    borderRadius: '10rem',
    width: '8rem',
  },
  root: {
    '&:hover': {
      backgroundColor: 'rgb(244,245,247)',
    },
    width: '0.5rem',
  },
  hiddenElements: {
    minWidth: '14rem',
  },
}));

export default useStyles;
