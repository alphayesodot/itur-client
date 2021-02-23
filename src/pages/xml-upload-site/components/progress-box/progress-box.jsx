import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './progress-box.styles';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const LinearProgressWithLabel = (props) => {
  const classes = useStyles();
  const { fileName, value } = props;
  return (
    <Box display="flex" flexDirection="column" p={1} m={1}>
      <Box className={classes.horizonBox} align="right" p={0.2}>
        {fileName}
        <DescriptionOutlinedIcon fontSize="small" />
      </Box>
      <LinearProgress
        className={classes.progressBar}
        variant="determinate"
        {...props}
      />
      <Box display="flex" flexDirection="row" alignItems="center" p={0.2}>
        <Typography
          className={classes.typography}
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
