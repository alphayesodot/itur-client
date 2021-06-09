import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  positiveRoot: {
    display: 'inline-block',
    color: '#0f2231',
    width: '9rem',
    height: '9rem',
    borderRadius: '14px',
    backgroundColor: '#d0e1e3',
    padding: '27px 29px 27px 29px',
    position: 'relative',
    margin: '1rem',
    direction: 'ltr',
    cursor: 'pointer',
  },
  negativeRoot: {
    display: 'inline-block',
    color: '#0f2231',
    width: '9rem',
    height: '9rem',
    borderRadius: '14px',
    backgroundColor: '#ecd8d8',
    padding: '27px 29px 27px 29px',
    position: 'relative',
    margin: '1rem',
    direction: 'ltr',
    cursor: 'pointer',
  },
  nodeGroupTitle: {
    wordSpacing: '0.1rem',
    fontSize: '1.125rem',
    lineHeight: '1.375rem',
    fontWeight: 500,
    paddingBottom: '0.938rem',
  },
  malshabs: {
    fontSize: '0.938rem',
    lineHeight: '1.25rem',
  },
  iconImg: {
    position: 'absolute',
    bottom: '1.438rem',
    right: '1.438rem',
    zIndex: 1,
  },
}));

export default useStyles;
