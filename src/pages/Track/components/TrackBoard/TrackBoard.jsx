import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './TrackBoard.styles';

const TrackBoard = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const getDatePreview = (date) => (
    <>
      {t('title.day')}
      {' '}
      {t(`day.${date.getDay() + 1}`)}
      {' '}
      {'//'}
      {' '}
      {date.toLocaleDateString('en-GB').replaceAll('/', '.')}
      {' '}
      {'//'}
      {' '}
      {date.toLocaleTimeString('en-US', { hour12: false,
        hour: 'numeric',
        minute: 'numeric' })}
    </>
  );

  return (
    <DashboardCard
      className={classes.root}
      width='95%'
      height='65vh'
      mt='1em'
    >
      <Typography className={classes.date}>
        {getDatePreview(new Date())}
      </Typography>
    </DashboardCard>
  );
};

export default TrackBoard;
