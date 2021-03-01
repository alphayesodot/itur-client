import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './progress-box.styles';
import { useTranslation } from 'react-i18next';

const LinearProgressWithLabel = (props) => {
  const classes = useStyles();
  const { fileName, value } = props;
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" p={1} m={1}>
      <Box p={0.2}>
        <span align=" right">
        {fileName}
        </span>
        <span align=" right">
        {t('xmlPage.cancel')}
        </span>
      </Box>
        <LinearProgress color= {classes.progressBar} className={classes.progressBar} variant="determinate" {...props} />
      <Box display="flex" flexDirection="row" alignItems="center" p={0.2}>
        <Typography className={classes.typography}>{`${value}% uploaded`}</Typography>
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

const ProgressBox = (props) => {
  const classes = useStyles();
  const { progress } = props;
  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} fileName={'filename.xml'} />
    </div>
  );
};

export default ProgressBox;
