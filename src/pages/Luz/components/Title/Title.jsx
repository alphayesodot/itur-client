import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar } from '@material-ui/core';
import UserStore from '../../../../stores/User.store';
import avatar from '../../../../utils/images/schedule/userpic-blue.svg';
import useStyles from './Title.styles';

const Title = ({ interviewsCount, nodeGroupName }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = UserStore.userProfile;

  /* eslint-disable react/jsx-no-comment-textnodes */
  const separation = <strong className={classes.separation}>//</strong>;

  const getStringOfDate = (date) => `${date.getDate()} ${t('text.in')}${t(`month.${date.getMonth()}`)}`;

  return (
    <Typography component='span' className={classes.root}>
      <Avatar alt={currentUser.name} src={avatar} className={classes.avatar} />
      {currentUser.name}
      {separation}
      {getStringOfDate(new Date())}
      {separation}
      <strong>{`${t('title.nodeGroup')} `}</strong>
      {nodeGroupName}
      {separation}
      <strong>{`${t('title.interviewsSchedule')} `}</strong>
      {interviewsCount}
    </Typography>
  );
};

export default Title;
