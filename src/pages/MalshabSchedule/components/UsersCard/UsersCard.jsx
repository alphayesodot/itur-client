import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import UserCard from '../UserCard/UserCard';
import useStyles from './UsersCard.styles';

const users = [
  {
    id: 1,
    name: 'יוזר #1',
    events: [
      { id: 1, firstName: 'אבי', lastName: 'סוויסה', time: `${new Date().toISOString().slice(0, 10)}T06:00:07.996+00:00` },
      { id: 2, firstName: 'אבי', lastName: 'סוויסה', time: `${new Date().toISOString().slice(0, 10)}T06:00:07.996+00:00` },
      { id: 3, firstName: 'אבי', lastName: 'סוויסה', time: `${new Date().toISOString().slice(0, 10)}T06:00:07.996+00:00` },
    ],
  },
  {
    id: 1,
    name: 'יוזר #2',
    events: [{ id: 1, firstName: 'אבי', lastName: 'סוויסה', time: `${new Date().toISOString().slice(0, 10)}T06:00:07.996+00:00` }],
  },
  {
    id: 1,
    name: 'יוזר #3',
    events: [{ id: 1, firstName: 'אבי', lastName: 'סוויסה', time: `${new Date().toISOString().slice(0, 10)}T06:00:07.996+00:00` }],
  },
  {
    id: 1,
    name: 'יוזר #4',
    events: [],
  },
  {
    id: 1,
    name: 'יוזר #5',
    events: [],
  },
  {
    id: 1,
    name: 'יוזר #6',
    events: [],
  },

];

const UsersCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.topRow}>
        <Typography className={classes.topRowText}>
          {t('unitControlPage.usersText')}
          <span>סה"כ - 60</span>
        </Typography>
      </div>
      <div className={classes.usersList}>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </DashboardCard>
  );
};

export default UsersCard;
