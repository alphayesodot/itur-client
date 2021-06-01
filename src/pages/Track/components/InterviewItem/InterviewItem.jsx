import React from 'react';
import { ListItem, Divider, Typography, Avatar, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DONE from '../../../../utils/images/schedule/passed-positive.svg';
import CANCELED from '../../../../utils/images/schedule/passed-negative.svg';
import BREAK from '../../../../utils/images/schedule/break.svg';
import DURING from '../../../../utils/images/schedule/during.svg';
import useStyles from './InterviewItem.styles';

const InterviewItem = ({ status, time, name }) => {
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
      <ListItem className={`${classes.item} ${classes[`item${status}`]}`}>
        { getIcon() && (
        <Tooltip arrow placement='right-end' title={t(`interviewStatus.${status}`)}>
          <Avatar alt={status} src={getIcon()} className={classes.icon} />
        </Tooltip>
        )}
        <Tooltip placement='bottom-start' title={name || ''}>
          <Typography className={`${classes.name} ${classes[`name${status}`]}`}>
            {name || ''}
          </Typography>
        </Tooltip>
        <Typography className={`${classes.time} ${classes[`time${status}`]}`}>
          {time.toTimeString().split(' ')[0].slice(0, 5)}
        </Typography>
      </ListItem>
      <Divider />
    </>
  );
};

export default InterviewItem;
