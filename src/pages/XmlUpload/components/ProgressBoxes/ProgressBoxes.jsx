import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import useStyles from './ProgressBoxes.styles';
import xmlImg from '../../../../utils/images/xmlFile.png';

const ProgressBoxes = ({ files, setFiles }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const deleteFromList = (fileToDelete) => {
    setFiles([...files.filter((f) => f.path !== fileToDelete.path)]);
  };

  const progressBox = (file) => (
    <Box className={classes.progressBox}>
      <img alt='xml file' className={classes.xmlImg} src={xmlImg} />
      <Box className={classes.upload}>
        <Box className={classes.infoBox}>
          <span className={classes.fileName}>{file.name}</span>
          {!file.progress ? (
            <CircularProgress size={17} className={classes.loader} />
          ) : (
            <Tooltip placement='top' title={t('xmlPage.hideFromView')}>
              <IconButton
                onClick={() => {
                  deleteFromList(file);
                }}
                className={classes.cancelButton}
                aria-label='cancel upload'
                component='span'
              >
                <CloseIcon className={classes.closeIcon} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <Typography className={classes.typography}>
          {`${Math.round(
            file.size / 1000,
          )} KB`}
        </Typography>
        <LinearProgress
          classes={{ root: classes.progressBar, barColorPrimary: classes.progressBarColor }}
          variant='determinate'
          value={file.progress}
        />
      </Box>
    </Box>
  );

  return (
    <div className={classes.root}>
      {files
        && files.map((file) => (
          <li className={classes.noneLi} key={file.path}>
            {progressBox(file)}
          </li>
        ))}
    </div>
  );
};

export default ProgressBoxes;
