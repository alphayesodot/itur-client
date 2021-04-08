import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './ProgressBoxes.styles';
import xmlImg from '../../images/xmlFile.png';

const ProgressBoxes = ({ files, setFiles }) => {
  const classes = useStyles();
  const deleteFromList = (fileToDelete) => {
    setFiles([...files.filter((f) => f.path !== fileToDelete.path)]);
  };

  const progressBox = (file) => (
    <Box className={classes.progressBox}>
      <img className={classes.xmlImg} src={xmlImg} />
      <Box className={classes.upload}>
        <Box className={classes.infoBox}>
          <span class={classes.fileName}>{file.name}</span>
          <IconButton
            onClick={() => {
              deleteFromList(file);
            }}
            className={classes.cancelButton}
            aria-label="cancel upload"
            component="span"
          >
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </Box>
        <Typography className={classes.typography}>{`${file.progress} KB`}</Typography>
        <LinearProgress
          classes={{ root: classes.progressBar, barColorPrimary: classes.progressBarColor }}
          variant="determinate"
          value={file.progress}
        />
      </Box>
    </Box>
  );
  return (
    <div className={classes.root}>
      {files &&
        files.map((file) => (
          <li className={classes.noneLi} key={file.path}>
            {progressBox(file)}
          </li>
        ))}
    </div>
  );
};

export default ProgressBoxes;
