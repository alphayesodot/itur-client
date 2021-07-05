import React, { useState, useEffect } from 'react';
import { Button, Input, Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { useTranslation } from 'react-i18next';
import searchImg from '../../../../utils/images/general/search-yellow.svg';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';

/**
 * This function gets prefix of nodeGroupName and returns all nodeGroups starts with that prefix
 * @param {*} prefix - prefix of nodeGroup name
 * @param {*} allQuestionnaireRows - all of nodeGroup rows that are in the server
 * @param {*} setQuestionnaireToShow - setState of shown nodeGroups
 */
const filterSearch = (prefix: string, allQuestionnaireRows: Array, setQuestionnaireToShow) => {
  const searchResults = allQuestionnaireRows
    .filter((nodeGroupRow) => nodeGroupRow.data[0].startsWith(prefix));
  setQuestionnaireToShow(searchResults);
};

const Header = ({ allQuestionnaireRows, setQuestionnaireToShow, openDialog }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation();
  useEffect(() => {
    if (inputValue) filterSearch(inputValue, allQuestionnaireRows, setQuestionnaireToShow);
  }, [allQuestionnaireRows]);
  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <div className={classes.main}>
          <Button
            className={`${classes.ceartionButton} ${classes.item}`}
            onClick={openDialog}
          >
            {t('button.newQuestionnaire')}
          </Button>
          <div className={classes.headerGroups}>
            <Fab
              size='medium'
              className={classes.searchButton}
              onClick={() => filterSearch(inputValue, allQuestionnaireRows, setQuestionnaireToShow)}
            >
              <img src={searchImg} className={classes.searchImg} alt='search' />
            </Fab>
            <Input
              className={classes.input}
              placeholder={t('placeholders.questionnaire')}
              value={inputValue}
              disableUnderline
              onChange={(e) => {
                setInputValue(e.target.value);
                if (!e.target.value.length) {
                  setQuestionnaireToShow(allQuestionnaireRows);
                }
              }}
              onKeyPress={(e) => e.charCode === 13
                && filterSearch(inputValue, allQuestionnaireRows, setQuestionnaireToShow)}
            />
            <Typography className={`${classes.questionnaire} ${classes.item}`}>
              <strong>{t('headerTitles.searchQuestionnaie')}</strong>
            </Typography>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default Header;
