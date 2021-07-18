import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import UserCard from '../UserCard/UserCard';
import useStyles from './UsersCard.styles';

const UsersCard = ({ users }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.topRow}>
        <Typography className={classes.topRowText}>
          {t('unitControlPage.usersText')}
          <span>{`${t('unitControlPage.totalText')} - ${users.length}`}</span>
        </Typography>
      </div>
      <div className={classes.usersList}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </DashboardCard>
  );
};

export default UsersCard;
