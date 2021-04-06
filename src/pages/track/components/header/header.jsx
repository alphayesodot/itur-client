import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './header.styles';

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography className={classes.unit}>
        {t('title.unit')}
        :
      </Typography>
    </div>
  );
};

export default Header;
