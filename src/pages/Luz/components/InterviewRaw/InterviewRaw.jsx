import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ListItem, Typography, Tooltip, Button, Dialog, IconButton } from '@material-ui/core';
import information from '../../../../utils/images/schedule/information.svg';
import informationLight from '../../../../utils/images/schedule/information-light.svg';
import play from '../../../../utils/images/schedule/play-button.svg';
import InterviewStatusIcon from '../../../../common/InterviewStatusIcon/InterviewStatusIcon';
import useStylesInterviewRaw from '../../../../common/InterviewItem.styles';
import useStyles from './InterviewRaw.styles';

const InterviewRaw = ({ status, time, malshabShort, timeDifference }) => {
  const classes = useStyles();
  const history = useHistory();
  const interviewRawClasses = useStylesInterviewRaw();
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <ListItem className={`${classes.root} ${interviewRawClasses.item} ${interviewRawClasses[`item${status}`]}`}>
        <div className={classes.iconsSection}>
          <Tooltip title={t('toolTip.information')}>
            <IconButton className={classes.iconButton} onClick={() => setOpenDialog(true)}>
              <img src={status === 'DURING' ? informationLight : information} alt='information' className={classes.iconButton} />
            </IconButton>
          </Tooltip>
          {status === 'DURING' && (
          <Button className={classes.button} onClick={() => history.push('/interview')}>
            {t('button.enter')}
          </Button>
          )}
          {/* TODO: Go to malshab page when there is a video */}
          {status === 'DONE' && (
          <Tooltip title={t('toolTip.playInterview')}>
            <IconButton className={classes.iconButton} onClick={() => history.push('/interview')}>
              <img src={play} alt='playInterview' className={classes.iconButton} />
            </IconButton>
          </Tooltip>
          )}
        </div>
        <Typography className={`${classes.identityNumber} ${classes[`identityNumber${status}`]}`}>
          {malshabShort && `${t('title.identityNumber')}: ${malshabShort.identityNumber}`}
        </Typography>
        <Tooltip
          placement='bottom-start'
          title={(malshabShort && `${malshabShort.firstName} ${malshabShort.lastName}`) || ''}
        >
          <Typography
            className={`${classes.name} ${interviewRawClasses.name} ${interviewRawClasses[`name${status}`]}`}
          >
            {malshabShort ? `${malshabShort.firstName} ${malshabShort.lastName}` : t('title.break')}
          </Typography>
        </Tooltip>
        <Typography
          className={`${classes.time} ${interviewRawClasses.time} ${interviewRawClasses[`time${status}`]}`}
        >
          {time.toTimeString().split(' ')[0].slice(0, 5)}
          -
          {new Date(time.getTime() + timeDifference).toTimeString().split(' ')[0].slice(0, 5)}
        </Typography>
        <div className={classes.icon}>
          <InterviewStatusIcon status={status} />
        </div>
      </ListItem>
      {/* TODO: Add malshab info dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>Malshab info</Dialog>
    </>
  );
};

export default InterviewRaw;
