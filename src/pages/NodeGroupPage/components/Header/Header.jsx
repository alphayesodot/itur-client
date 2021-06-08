import React from 'react';
import { Button, Input, Typography } from '@material-ui/core';
// import Fab from '@material-ui/core/Fab';
import { useTranslation } from 'react-i18next';
// import searchImg from '../../../../utils/images/general/search-yellow.svg';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <div className={classes.main}>
          <Button className={`${classes.newNodeGroupButton} ${classes.item}`}>
            {t('button.newNodeGroup')}
          </Button>
          <div className={classes.headerGroups}>
            {/* <Fab size='medium' className={classes.searchButton}>
              <img src={searchImg} className={classes.searchImg} alt='search' />
            </Fab> */}
            <Input className={classes.input} />
            <Typography className={`${classes.unit} ${classes.item}`}>
              :
              <strong>{t('headerTitles.searchNodeGroup')}</strong>
            </Typography>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default Header;
