import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1em',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainDiv: {
    height: '90%',
    maxHeight: '45rem',
    width: '70%',
    padding: '0 15%',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
  noNodesGroups: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    color: 'rgb(141 148 160 / 0.31)',
    fontSize: '2rem',
    fontWeight: 'bold',

  },
}));

export default useStyles;
