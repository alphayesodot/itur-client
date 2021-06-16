import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { TextField, Typography } from '@material-ui/core';
import NodeGroupSelect from '../../common/NodeGroupSelect/NodeGroupSelect';
import UnitSelect from '../../common/UnitSelect/UnitSelect';
import useStyles from './index.styles';
import InputSection from './components/InputSection/InputSection';

const Reports = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [nodeGroup, setNodeGroup] = useState();
  const [unit, setUnit] = useState();
  const { t } = useTranslation();

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
          label={t('label.datesRange')}
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
      </div>
    </div>
  );
};

export default Reports;
