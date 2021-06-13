import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ListItem, Typography, Tooltip, Button, IconButton } from '@material-ui/core';
import information from '../../../../utils/images/schedule/information.svg';
import informationLight from '../../../../utils/images/schedule/information-light.svg';
import play from '../../../../utils/images/schedule/play-button.svg';
import info from '../../../../utils/images/malshabInfo/info.svg';
import InterviewStatusIcon from '../../../../common/InterviewStatusIcon/InterviewStatusIcon';
import useStylesInterviewRaw from '../../../../common/InterviewItem/InterviewItem.styles';
import useStyles from './InterviewRaw.styles';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog';
import MalshabInfo from '../../../../common/MalshabInfo';

const InterviewRaw = ({ event, timeDifference }) => {
  const classes = useStyles();
  const history = useHistory();
  const interviewRawClasses = useStylesInterviewRaw();
  const [openDialog, setOpenDialog] = useState(false);
  const { status, time, malshabShort, results } = event;
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
          {status === 'DONE' && results.videoUrl && (
            <Tooltip title={t('toolTip.playInterview')}>
              {/* TODO: Send eventId as a prop to interview page */}
              <IconButton className={classes.iconButton} onClick={() => history.push('/interview')}>
                <img src={play} alt='playInterview' className={classes.iconButton} />
              </IconButton>
            </Tooltip>
          )}
          {!['DONE', 'CANCELED', 'BREAK'].includes(status) && (
          <Button
            className={`${classes.button} ${status !== 'DURING' ? classes.disabled : ''}`}
            disabled={status !== 'DURING'}
            onClick={() => history.push('/interview')}
          >
            {t('button.enter')}
          </Button>
          )}
        </div>
        <Typography className={`${classes.identityNumber} ${classes[`identityNumber${status}`]}`}>
          {malshabShort && `${t('title.identityNumber')}: ${malshabShort.id}`}
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
          {new Date(time).toTimeString().split(' ')[0].slice(0, 5)}
          -
          {new Date(new Date(time).getTime() + timeDifference).toTimeString().split(' ')[0].slice(0, 5)}
        </Typography>
        <div className={classes.icon}>
          <InterviewStatusIcon status={status} />
        </div>
      </ListItem>
      <CustomDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title={(
          <Typography className={classes.dialogTitle}>
            <img src={info} alt='info' className={classes.infoIcon} />
            {t('title.moreDetails')}
          </Typography>
        )}
        content={<MalshabInfo id={malshabShort?.identityNumber} />}
      />
    </>
  );
};

export default InterviewRaw;
