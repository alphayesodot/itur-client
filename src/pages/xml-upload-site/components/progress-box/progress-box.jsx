import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import useStyles from './progress-box.styles';
import xmlImg from '../../images/xmlFile.png';

const LinearProgressWithLabel = (props) => {
  const classes = useStyles();
  const { fileName, value } = props;
  const { t } = useTranslation();
  return (
    <Box className={classes.root}>
      <img src={xmlImg}></img>
      <Box className={classes.upload}>
        <Box className={classes.infoBox}>
          <span class={classes.fileName}>{fileName}</span>
          <IconButton className={classes.cancelButton} aria-label="cancel upload" component="span">
            <CloseIcon style={{ fontSize: 17 }} />
          </IconButton>
        </Box>
        <Typography className={classes.typography}>{`${value} KB`}</Typography>
        <LinearProgress className={classes.progressBar} variant="determinate" {...props} />
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
  const { progress } = props;
  return <LinearProgressWithLabel value={progress} fileName={'filename.xml'} />;
};

export default ProgressBox;
