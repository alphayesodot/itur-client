/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import {
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './index.styles';
import RTL from '../../utils/rtl';
import NodeGroups from './components/NodeGroups/NodeGroups';
import UserStoreInstance from '../../stores/User.store';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import NodeGroupService from '../../services/nodeGroup.service';

const MalshabSchedulePage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [nameOrId, setNameOrId] = React.useState();
  const [choosenNodeGroup, setChoosenNodeGroup] = useState('');
  const unitId = UserStoreInstance.userProfile.unit;
  const [unitNodesGroups, setUnitNodesGroups] = useState([]);

  const handleChange = (event) => {
    setNameOrId(event.target.value);
  };

  useEffect(async () => {
    setUnitNodesGroups(await NodeGroupService.getNodesGroupByUnit(unitId));
  }, []);

  return (
    <RTL>
      <div className={classes.root}>
        <DashboardCard className={classes.formUnitHeader} />
        {choosenNodeGroup !== '' ? (
          <div className={classes.mainInner}>
            <DashboardCard className={classes.malshabimCard}>
              <div className={classes.malshabimTopRow}>
                <Typography className={classes.malshabimText}>
                  {t('unitControlPage.malshabimText')}
                  <span>סה"כ - 60</span>
                </Typography>
                <form>
                  <FormControl
                    variant='outlined'
                    className={classes.formControlNameOrId}
                  >
                    <InputLabel className={classes.formNameOrIdInputLabel}>
                      {t('unitControlPage.nameOrIdText')}
                    </InputLabel>
                    <OutlinedInput
                      size='small'
                      className={classes.formNameOrIdInputText}
                      value={nameOrId}
                      onChange={handleChange}
                      label='nameOrId'
                    />
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
            </DashboardCard>
            <DashboardCard className={classes.usersCard} />
          </div>
        ) : (
          <NodeGroups unitNodesGroups={unitNodesGroups} setChoosenNodeGroup={setChoosenNodeGroup} />
        )}
      </div>
    </RTL>
  );
};

export default MalshabSchedulePage;
