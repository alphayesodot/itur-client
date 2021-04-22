import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Divider, Typography, Avatar, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DONE from '../../../../utils/images/passed-positive.svg';
import CANCELED from '../../../../utils/images/passed-negative.svg';
import BREAK from '../../../../utils/images/break.svg';
import DURING from '../../../../utils/images/during.svg';
import useStyles from './InterviewItem.styles';

const InterviewItem = ({ status, time, name }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const getIcon = (interviewStatus) => {
    switch (interviewStatus) {
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
      <ListItem className={classes[`item${status}`]}>
        <Typography className={`${classes.time} ${classes[`time${status}`]}`}>
          {time.toTimeString().split(' ')[0].slice(0, 5)}
        </Typography>
        {name && (
        <Tooltip title={name}>
          <Typography className={`${classes.name} ${classes[`name${status}`]}`}>
            {name}
          </Typography>
        </Tooltip>
        )}
        { getIcon(status) && (
        <Tooltip arrow placement='right-end' title={t(`interviewStatus.${status}`)}>
          <Avatar alt='avatar' src={getIcon(status)} className={classes.avatar} />
        </Tooltip>
        )}
      </ListItem>
      <Divider />
    </>
  );
};

InterviewItem.propTypes = {
  status: PropTypes.string,
  time: PropTypes.instanceOf(Date).isRequired,
  name: PropTypes.string,
};

InterviewItem.defaultProps = {
  status: '',
  name: '',
};

export default InterviewItem;
