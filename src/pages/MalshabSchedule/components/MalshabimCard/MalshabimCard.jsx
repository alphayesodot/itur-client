import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './MalshabimCard.styles';
import BasicTable from '../BasicTable/BasicTable';
import SelectBox from '../SelectBox/SelectBox';

const selectSchedulingOptions = ['11', '21', '13', '23', '22', '33', 'שיבוץ אוטומטי'];

const MalshabimCard = ({ interviewers, events, handleMalshabsToSchedule }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nameOrId, setNameOrId] = React.useState('');
  const [selectedScheduling, setSelectedScheduling] = React.useState([t('unitControlPage.automaticScheduling')]);
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [tableData, setTableData] = useState();
  const [tableDataToDisplay, setTableDataToDisplay] = useState();
  const [chosenMalshabs, setChosenMalshabs] = useState([]);
  const [hoursSelectOptions, setHoursSelectOptions] = useState([]);
  const [usersSelectOptions, setUsersSelectOptions] = useState([]);
  const statusSelectOptions = [t('unitControlPage.isScheduled'), t('unitControlPage.notScheduled')];

  const getInterviewersDisplay = (interviewersIds) => {
    const interviewersObjects = interviewers.filter((interviewer) => (
      interviewersIds.includes(interviewer.id)
    ));
    const interviewersSigns = interviewersObjects.map(({ name }) => name.slice(-4));
    setUsersSelectOptions((prevValue) => [...prevValue, ...interviewersSigns]);
    return interviewersSigns.join(',');
  };

  const handleRecievedEvents = () => {
    const columnData = [
      { id: 5, name: t('malshabimTable.time') },
      { id: 4, name: t('malshabimTable.users') },
      { id: 3, name: t('malshabimTable.status') },
      { id: 2, name: t('malshabimTable.id') },
      { id: 1, name: t('malshabimTable.name') },
    ];

    setUsersSelectOptions([]);
    const rowsData = events.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
      .map((event) => (
        {
          name: `${event.malshabShort.firstName} ${event.malshabShort.lastName}`,
          id: event.malshabShort.id,
          status: `${event.interviewersIds.length === 0 ? t('unitControlPage.notScheduled') : t('unitControlPage.isScheduled')}`,
          users: getInterviewersDisplay(event.interviewersIds),
          time: new Date(event.time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        }
      ));
    setTableData({ columnData, rowsData });
    setTableDataToDisplay({ columnData, rowsData });
  };

  useEffect(() => {
    if (tableData) {
      const rowsData = tableData.rowsData.filter((row) => {
        if (selectedStatus && row.status !== selectedStatus) return false;
        if (selectedHour && row.time !== selectedHour) return false;
        if (selectedUser && !row.users.split(',').includes(selectedUser)) return false;
        if (nameOrId) {
          return row.name.includes(nameOrId) || row.id.startsWith(nameOrId);
        }
        return true;
      });
      setTableDataToDisplay({ ...tableData, rowsData });
    }
  }, [selectedStatus, selectedHour, selectedUser, nameOrId]);

  useEffect(() => {
    if (events) {
      handleRecievedEvents();
      const eventsHours = events.map((event) => new Date(event.time).toLocaleTimeString(
        'en-GB',
        { hour: '2-digit', minute: '2-digit' },
      ));
      setHoursSelectOptions([...new Set(eventsHours)]);
    }
  }, [events]);

  const handleChosenMalshabs = (selectedMalshabs) => {
    setChosenMalshabs(selectedMalshabs);
  };

  const handleSetSelectedValues = (selectedValues) => {
    const autoSchedulingValue = t('unitControlPage.automaticScheduling');
    // if none of the selected values is 'auto' or 'auto' is the only selected value
    // then just set the values as is
    if (!selectedValues.includes(autoSchedulingValue) || selectedValues.length === 1) {
      return setSelectedScheduling(selectedValues);
    }
    // 'auto' can either be in the first index, means it was chosen first then another
    // value was selected
    // in that case desselect 'auto' and leave the other value
    // if 'auto' is not at the first index then it can be the last,
    // in that case some values were selected
    // and 'auto' was the last selected then we need to leave only 'auto'
    if (selectedValues[0] === autoSchedulingValue) {
      setSelectedScheduling([selectedValues[1]]);
    } else if (selectedValues[selectedValues.length - 1] === autoSchedulingValue) {
      setSelectedScheduling([autoSchedulingValue]);
    }
  };

  const handleScheduling = () => {
    handleMalshabsToSchedule(chosenMalshabs, selectedScheduling);
  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.malshabimTopRow}>
        <Typography className={classes.malshabimText}>
          {t('unitControlPage.malshabimText')}
          <span>{`${t('unitControlPage.totalText')} - ${events?.length}`}</span>
        </Typography>
        <div className={classes.selectionBoxes}>
          <FormControl size='small' variant='outlined' className={classes.formControlNameOrId}>
            <InputLabel className={classes.formNameOrIdInputLabel}>{t('unitControlPage.nameOrIdText')}</InputLabel>
            <OutlinedInput className={classes.formNameOrIdInputText} value={nameOrId} onChange={(event) => setNameOrId(event.target.value)} label='nameOrId' />
          </FormControl>

          <SelectBox
            className={classes.selectHour}
            label={t('unitControlPage.hour')}
            values={hoursSelectOptions}
            selectedValue={selectedHour}
            setSelectedValue={setSelectedHour}
          />

          <SelectBox
            className={classes.selectUsers}
            label={t('unitControlPage.users')}
            values={usersSelectOptions}
            selectedValue={selectedUser}
            setSelectedValue={setSelectedUser}
          />

          <SelectBox
            className={classes.selectScheduled}
            label={t('unitControlPage.status')}
            values={statusSelectOptions}
            selectedValue={selectedStatus}
            setSelectedValue={setSelectedStatus}
          />
        </div>
      </div>

      <BasicTable
        tableData={tableDataToDisplay}
        handleChosenMalshabs={handleChosenMalshabs}
      />
      <div className={classes.bottomRow}>
        <div className={classes.selectionBox}>
          <span>
            <Typography className={classes.selectedText}>{`${t('unitControlPage.selected')} ${chosenMalshabs.length}`}</Typography>
          </span>
          {selectedScheduling && (
          <SelectBox
            className={classes.selectScheduling}
            values={selectSchedulingOptions}
            selectedValues={selectedScheduling}
            setSelectedValues={handleSetSelectedValues}
            hasEmptyValue={false}
            multiSelect
          />
          )}
        </div>
        <Button disabled={!chosenMalshabs.length} className={classes.confirmButton} onClick={handleScheduling}>{t('title.confirm')}</Button>
      </div>
    </DashboardCard>
  );
};

export default MalshabimCard;
