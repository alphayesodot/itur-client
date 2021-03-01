import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { useTranslation } from 'react-i18next';
import useStyles from './progress-box.styles';

const LinearProgressWithLabel = (props) => {
  const classes = useStyles();
  const { fileName, value } = props;
  const { t } = useTranslation();
  return (
    <Box className={classes.root}>
      <Box className={classes.infoBox}>
        <Box className={classes.fileName}>
          {fileName} <DescriptionOutlinedIcon fontSize="small" />
        </Box>
        <Button>{t('xmlPage.cancel')}</Button>
      </Box>
      <LinearProgress className={classes.progressBar} variant="determinate" {...props} />
      <Typography className={classes.typography}>{`${value}% uploaded`}</Typography>
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
  return <LinearProgressWithLabel value={progress} fileName={'filename.xml'} />;
};

export default ProgressBox;
