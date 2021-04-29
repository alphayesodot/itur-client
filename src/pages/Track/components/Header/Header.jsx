import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography, Select, MenuItem, TextField, Button } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import nodeGroupService from '../../../../services/nodeGroup.service';
import useStyles from './Header.styles';

const Header = ({ unit }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nodeGroups, setNodeGroups] = useState([]);

  useEffect(() => {
    nodeGroupService.getNodeGroups().then((res) => {
      setNodeGroups(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <div className={classes.main}>
          <Typography className={`${classes.unit} ${classes.item}`}>
            {t('title.unit')}
            :
            {' '}
            <strong>{unit ? unit.name : ''}</strong>
          </Typography>
          <Select
            className={`${classes.select} ${classes.item}`}
            inputProps={{ classes: { icon: classes.icon } }}
            disableUnderline
          >
            {nodeGroups.map((nodeGroup) => (
              <MenuItem className={classes.nodeGroup} key={nodeGroup._id} value={nodeGroup._id}>
                {nodeGroup.name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            className={`${classes.date} ${classes.item}`}
            type='date'
            defaultValue={new Date().toLocaleDateString('fr-CA', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </div>
        <Button className={classes.button}>
          {t('button.newSchedule')}
        </Button>
      </div>
    </DashboardCard>
  );
};

export default Header;
