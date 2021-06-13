import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './MalshabimCard.styles';
import BasicTable from '../GenericTable';
import SelectScheduling from '../SelectScheduling/SelectScheduling';
import SelectBox from '../SelectBox/SelectBox';

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

const usersToScheduleTo = [
  { name: 'avram', id: '#1' },
  { name: 'yakov', id: '#2' },
  { name: 'dudu', id: '#3' },
];

const hoursSelectOptions = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30'];
const usersSelectOptions = ['#1', '#2', '#3', '#4'];

const MalshabimCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nameOrId, setNameOrId] = React.useState();
  const [selectedScheduling, setSelectedScheduling] = React.useState(t('unitControlPage.automaticScheduling'));
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const [chosenMalshabs, setChosenMalshabs] = React.useState([]);
  const selectSchedulingOptions = [...usersToScheduleTo, { id: t('unitControlPage.automaticScheduling'), name: t('unitControlPage.automaticScheduling') }];
  const statusSelectOptions = [t('unitControlPage.isScheduled'), t('unitControlPage.notScheduled')];

  const columnData = [
    { id: 5, name: t('malshabimTable.time') },
    { id: 4, name: t('malshabimTable.users') },
    { id: 3, name: t('malshabimTable.status') },
    { id: 2, name: t('malshabimTable.id') },
    { id: 1, name: t('malshabimTable.name') },
  ];

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.malshabimTopRow}>
        <Typography className={classes.malshabimText}>
          {t('unitControlPage.malshabimText')}
          <span>סה"כ - 60</span>
        </Typography>
        <FormControl variant='outlined' className={classes.formControlNameOrId}>
          <InputLabel className={classes.formNameOrIdInputLabel}>{t('unitControlPage.nameOrIdText')}</InputLabel>
          <OutlinedInput size='small' className={classes.formNameOrIdInputText} value={nameOrId} label='nameOrId' />
        </FormControl>

        <SelectBox
          label={t('unitControlPage.hour')}
          values={hoursSelectOptions}
          selectedValue={selectedHour}
          setSelectedValue={setSelectedHour}
        />

        <SelectBox
          label={t('unitControlPage.users')}
          values={usersSelectOptions}
          selectedValue={selectedUser}
          setSelectedValue={setSelectedUser}
        />

        <SelectBox
          style={{ width: '8rem' }}
          label={t('unitControlPage.status')}
          values={statusSelectOptions}
          selectedValue={selectedStatus}
          setSelectedValue={setSelectedStatus}
        />
      </div>
      <BasicTable
        columnData={columnData}
        rowsData={rowsData}
        chosenMalshabs={chosenMalshabs}
        setChosenMalshabs={setChosenMalshabs}
      />
      <div className={classes.bottomRow}>
        <div className={classes.selectionBox}>
          <span>
            <Typography className={classes.selectedText}>{`${t('unitControlPage.selected')} ${chosenMalshabs.length}`}</Typography>
          </span>
          <SelectScheduling
            selectedScheduling={selectedScheduling}
            setSelectedScheduling={setSelectedScheduling}
            selectOptions={selectSchedulingOptions}
          />
        </div>
        <Button className={classes.button}>{t('title.confirm')}</Button>

      </div>
    </DashboardCard>
  );
};

export default MalshabimCard;
