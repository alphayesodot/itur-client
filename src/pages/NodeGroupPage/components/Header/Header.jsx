import React, { useState } from 'react';
import { Button, Input, Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { useTranslation } from 'react-i18next';
import searchImg from '../../../../utils/images/general/search-yellow.svg';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';

/**
 * This function gets prefix of nodeGroupName and returns all nodeGroups starts with that prefix
 * @param {*} prefix - prefix of nodeGroup name
 * @param {*} allNodeGroupRows - all of nodeGroup rows that are in the server
 * @param {*} setNodeGroupRowsToShow - setState of shown nodeGroups
 */
const filterSearch = (prefix: string, allNodeGroupRows: Array, setNodeGroupRowsToShow) => {
  const searchResults = allNodeGroupRows
    .filter((nodeGroupRow) => nodeGroupRow[0].startsWith(prefix));
  setNodeGroupRowsToShow(searchResults);
};

const Header = ({ allNodeGroupRows, setNodeGroupRowsToShow }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation();
  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <div className={classes.main}>
          <Button
            className={`${classes.newNodeGroupButton} ${classes.item}`}
          >
            {t('button.newNodeGroup')}
          </Button>
          <div className={classes.headerGroups}>
            <Fab
              size='medium'
              className={classes.searchButton}
              onClick={() => filterSearch(inputValue, allNodeGroupRows, setNodeGroupRowsToShow)}
            >
              <img src={searchImg} className={classes.searchImg} alt='search' />
            </Fab>
            <Input
              className={classes.input}
              placeholder={t('placeholders.nodeGroup')}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (!e.target.value.length) {
                  setNodeGroupRowsToShow(allNodeGroupRows);
                }
              }}
              onKeyPress={(e) => e.charCode === 13
                && filterSearch(inputValue, allNodeGroupRows, setNodeGroupRowsToShow)}
            />
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
