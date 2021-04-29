import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Select, MenuItem } from '@material-ui/core';
import nodeGroupService from '../../../../services/nodeGroup.service';
import useStyles from './NodeGroupSelect.styles';

const NodeGroupSelect = ({ selectedNodeGroupId, setSelectedNodeGroupId }) => {
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

  const handleOnChange = (e) => {
    setSelectedNodeGroupId(e.target.value);
  };

  return (
    <Select
      className={classes.root}
      inputProps={{ classes: { icon: classes.icon } }}
      onChange={handleOnChange}
      value={selectedNodeGroupId}
      disableUnderline
    >
      {nodeGroups.map((nodeGroup) => (
        <MenuItem
          className={classes.item}
          key={nodeGroup._id}
          value={nodeGroup._id}
        >
          {nodeGroup.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default NodeGroupSelect;
