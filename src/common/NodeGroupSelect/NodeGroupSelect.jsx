import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Select, MenuItem } from '@material-ui/core';
import nodeGroupService from '../../services/nodeGroup.service';
import useStyles from './NodeGroupSelect.styles';

/**
 * @param {*} selectedNodeGroup: selected nodeGroup state
 * @param {*} setSelectedNodeGroup: set selected nodeGroup's state function
 * @param {*} selectClassName: optional, additional select's class name defined by makestyles
 * @returns nodeGroup select
 */
const NodeGroupSelect = ({ selectedNodeGroup, setSelectedNodeGroup, selectClassName }) => {
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
    setSelectedNodeGroup(nodeGroups.find((nodeGroup) => nodeGroup.id === e.target.value));
  };

  return (
    <Select
      className={selectClassName}
      inputProps={{ classes: { root: classes.select, icon: classes.icon } }}
      onChange={handleOnChange}
      value={selectedNodeGroup ? selectedNodeGroup.id : ''}
      disableUnderline
    >
      {nodeGroups.length === 0
        ? (
          <MenuItem disabled>
            {t('message.noNodeGroups')}
          </MenuItem>
        )
        : nodeGroups.map((nodeGroup) => (
          <MenuItem key={nodeGroup.id} value={nodeGroup.id}>
            {nodeGroup.name}
          </MenuItem>
        ))}
    </Select>
  );
};

export default NodeGroupSelect;
