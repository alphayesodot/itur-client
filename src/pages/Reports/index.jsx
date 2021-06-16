import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { TextField, Typography } from '@material-ui/core';
import NodeGroupSelect from '../../common/NodeGroupSelect/NodeGroupSelect';
import UnitSelect from '../../common/UnitSelect/UnitSelect';
import DateInput from '../../common/DateInput/DateInput';
import useStyles from './index.styles';
import InputSection from './components/InputSection/InputSection';

const Reports = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [nodeGroup, setNodeGroup] = useState();
  const [unit, setUnit] = useState();
  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    if (!maxDate || new Date(maxDate).getTime() > new Date(minDate).getTime()) {
      setMaxDate(minDate);
    }
  }, [minDate]);
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {t('title.reports')}
      </Typography>
      <div className={classes.fieldsRaw}>
        <InputSection
          label={t('label.reportName')}
          input={(
            <TextField
              className={classes.input}
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              InputProps={{
                disableUnderline: true,
              }}
            />
          )}
        />
        {/* TODO: Only if the user don't have a unit himself */}
        <InputSection
          label={t('label.unit')}
          input={(
            <UnitSelect
              selectedUnit={unit}
              setSelectedUnit={setUnit}
              selectClassName={`${classes.input} ${classes.select}`}
            />
          )}
        />
        {/* TODO: Only if not ramad itur-assistant/pr */}
        <InputSection
          label={t('label.nodeGroup')}
          input={(
            <NodeGroupSelect
              selectedNodeGroup={nodeGroup}
              setSelectedNodeGroup={setNodeGroup}
              selectClassName={`${classes.input} ${classes.select}`}
            />
          )}
        />
        <InputSection
          label={t('label.minDate')}
          input={(
            <DateInput
              selectedDate={minDate}
              setSelectedDate={setMinDate}
              inputClassName={classes.input}
            />
          )}
        />
        {/* TODO When changing minDate- complete max date to the same value if it is smaller */}
        <InputSection
          label={t('label.maxDate')}
          input={(
            <DateInput
              selectedDate={maxDate}
              setSelectedDate={setMaxDate}
              inputClassName={classes.input}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Reports;
