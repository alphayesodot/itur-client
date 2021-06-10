import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './MalshabimCard.styles';
import BasicTable from '../GenericTable';

const rowsData = [
  { name: 'שלומי אליאס', id: '123123123', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123124', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123125', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123126', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123127', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123128', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123129', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123121', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '123123122', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '1231231233', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '1231231234', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
  { name: 'שלומי אליאס', id: '1231231235', status: 'לא שובץ', users: '#1 #2 #3', time: '08:00' },
];

const MalshabimCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nameOrId, setNameOrId] = React.useState();

  const [chosenMalshabs, setChosenMalshabs] = React.useState();

  const columnData = [
    { id: 5, name: t('malshabimTable.time') },
    { id: 4, name: t('malshabimTable.users') },
    { id: 3, name: t('malshabimTable.status') },
    { id: 2, name: t('malshabimTable.id') },
    { id: 1, name: t('malshabimTable.name') },
  ];

  const handleChange = (event) => {
    setNameOrId(event.target.value);
  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.malshabimTopRow}>
        <Typography className={classes.malshabimText}>
          {t('unitControlPage.malshabimText')}
          <span>סה"כ - 60</span>
        </Typography>
        <form>
          <FormControl variant='outlined' className={classes.formControlNameOrId}>
            <InputLabel className={classes.formNameOrIdInputLabel}>{t('unitControlPage.nameOrIdText')}</InputLabel>
            <OutlinedInput size='small' className={classes.formNameOrIdInputText} value={nameOrId} onChange={handleChange} label='nameOrId' />
          </FormControl>

          <TextField
            className={classes.selectHour}
            select
            label={t('unitControlPage.hour')}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant='outlined'
          />

          <TextField
            className={classes.selectUsers}
            select
            label={t('unitControlPage.users')}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant='outlined'
          />

          <TextField
            className={classes.isScheduled}
            select
            label={t('unitControlPage.isScheduled')}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant='outlined'
          />
        </form>
      </div>
      <BasicTable
        columnData={columnData}
        rowsData={rowsData}
        chosenMalshabs={chosenMalshabs}
        setChosenMalshabs={setChosenMalshabs}
      />
      <div className={classes.bottomRow}>
        <Button className={classes.button}>{t('title.confirm')}</Button>
      </div>
    </DashboardCard>
  );
};

export default MalshabimCard;
