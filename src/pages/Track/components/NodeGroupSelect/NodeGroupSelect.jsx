import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Select, MenuItem } from '@material-ui/core';
import nodeGroupService from '../../../../services/nodeGroup.service';
import useStyles from './NodeGroupSelect.styles';

const NodeGroupSelect = ({ selectedNodeGroup, setSelectedNodeGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nodeGroups, setNodeGroups] = useState([]);

  useEffect(() => {
    nodeGroupService.getNodeGroups().then((res) => {
      setNodeGroups(res);
      setSelectedNodeGroup(res[0]);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedNodeGroup(nodeGroups.find((nodeGroup) => nodeGroup._id === e.target.value));
  };

  return (
    <Select
      className={classes.root}
      inputProps={{ classes: { icon: classes.icon } }}
      onChange={handleOnChange}
      value={selectedNodeGroup ? selectedNodeGroup._id : ''}
      disableUnderline
    >
      {nodeGroups.length === 0
        ? (
          <MenuItem
            className={classes.item}
            disabled
          >
            {t('title.noNodeGroups')}
          </MenuItem>
        )
        : nodeGroups.map((nodeGroup) => (
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
