import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { TextField, Typography } from '@material-ui/core';
import NodeGroupSelect from '../../common/NodeGroupSelect/NodeGroupSelect';
import UnitSelect from '../../common/UnitSelect/UnitSelect';
import useStyles from './index.styles';

const Reports = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [nodeGroup, setNodeGroup] = useState();
  const [unit, setUnit] = useState();
  const { t } = useTranslation();

  const getInputSection = (label, input) => (
    <div className={classes.inputSection}>
      <Typography className={classes.inputLabel}>{label}</Typography>
      {input}
    </div>
  );

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {t('title.reports')}
      </Typography>
      <div className={classes.fieldsRaw}>
        {getInputSection(
          t('label.reportName'),
          <TextField
            className={classes.input}
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            InputProps={{
              disableUnderline: true,
            }}
          />,
        )}
        {getInputSection(
          t('label.unit'),
          <UnitSelect
            selectedUnit={unit}
            setSelectedUnit={setUnit}
            selectClassName={`${classes.input} ${classes.select}`}
          />,
        )}
        {getInputSection(
          t('label.nodeGroup'),
          <NodeGroupSelect
            selectedNodeGroup={nodeGroup}
            setSelectedNodeGroup={setNodeGroup}
            selectClassName={`${classes.input} ${classes.select}`}
          />,
        )}
        {getInputSection(
          t('label.datesRange'),
          <TextField
            className={classes.input}
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            InputProps={{
              disableUnderline: true,
            }}
          />,
        )}
      </div>
    </div>
  );
};

export default Reports;
