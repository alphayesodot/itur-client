import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar } from '@material-ui/core';
import { toast } from 'react-toastify';
import UserStore from '../../../../stores/User.store';
import NodeGroupService from '../../../../services/nodeGroup.service';
import avatar from '../../../../utils/images/schedule/userpic-blue.svg';
import useStyles from './Title.styles';

const Title = ({ interviewsCount }) => {
  const classes = useStyles();
  const currentUser = UserStore.userProfile;
  const { t } = useTranslation();
  const [nodeGroup, setNodeGroup] = useState();

  useEffect(() => {
    NodeGroupService.getNodeGroups().then((res) => {
      setNodeGroup(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

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
      {nodeGroup && nodeGroup.name}
      {separation}
      <strong>{`${t('title.interviewsSchedule')} `}</strong>
      {interviewsCount}
    </Typography>
  );
};

export default Title;
