import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './progress-box.styles';

const LinearProgressWithLabel = (props) => {
  const { fileName, value } = props;
  return (
    <Box display="flex" flexDirection="column" p={1} m={1}>
      <Box align=" right" p={0.2}>
        {fileName}
      </Box>
      <Box p={0.5}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" p={0.2}>
        <Typography
          variant="body2"
          color="textSecondary"
        >{`${value}% uploaded`}</Typography>
      </Box>
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const ProgressBox = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 2
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} fileName={'filename.xml'} />
    </div>
  );
};

export default ProgressBox;
