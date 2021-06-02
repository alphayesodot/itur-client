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

  const getIcon = () => {
    switch (status) {
      case 'DONE':
        return DONE;
      case 'CANCELED':
        return CANCELED;
      case 'BREAK':
        return BREAK;
      case 'DURING':
        return DURING;
      default:
        return undefined;
    }
  };

  return (
    <>
      { getIcon() && (
        <Tooltip arrow placement='right-end' title={t(`interviewStatus.${status}`)}>
          <Avatar alt={status} src={getIcon()} className={classes.icon} />
        </Tooltip>
      )}
    </>
  );
};

export default InterviewStatusIcon;
