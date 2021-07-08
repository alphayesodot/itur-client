import React from 'react';
import { Avatar, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DONE from '../../utils/images/schedule/passed-positive.svg';
import CANCELED from '../../utils/images/schedule/passed-negative.svg';
import BREAK from '../../utils/images/schedule/break.svg';
import DURING from '../../utils/images/schedule/during.svg';
import useStyles from './InterviewStatusIcon.styles';

const InterviewStatusIcon = ({ status }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const iconMap = new Map();
  iconMap.DONE = DONE;
  iconMap.CANCELED = CANCELED;
  iconMap.BREAK = BREAK;
  iconMap.DURING = DURING;

  return (
    <div className={classes.root}>
      { iconMap[status] && (
        <Tooltip arrow placement='right-end' title={t(`interviewStatus.${status}`)}>
          <Avatar alt={status} src={iconMap[status]} className={classes.icon} />
        </Tooltip>
      )}
    </div>
  );
};

export default InterviewStatusIcon;
