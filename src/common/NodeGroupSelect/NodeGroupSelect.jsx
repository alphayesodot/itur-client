import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import nodeGroupService from '../../services/nodeGroup.service';
import GenericSelect from '../GenericSelect/GenericSelect';

/**
 * @param {*} selectedNodeGroup: selected nodeGroup state
 * @param {*} setSelectedNodeGroup: set selected nodeGroup's state function
 * @param {*} selectClassName: optional, additional select's class name defined by makestyles
 * @param {*} isMultiple: optional, is multiple options
 * @returns nodeGroup select
 */
const NodeGroupSelect = ({
  selectedNodeGroup,
  setSelectedNodeGroup,
  selectClassName,
  isMultiple,
  selectFirst,
}) => {
  const { t } = useTranslation();
  const [nodeGroups, setNodeGroups] = useState([]);

  useEffect(() => {
    nodeGroupService.getNodeGroups().then((res) => {
      const mappedRes = res.map((nodeGroup) => ({ ...nodeGroup, label: nodeGroup.name }));
      setNodeGroups(mappedRes);
      if (selectFirst) {
        setSelectedNodeGroup(isMultiple ? [] : mappedRes[0]);
      }
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  return (
    <GenericSelect
      options={nodeGroups}
      selectedValue={selectedNodeGroup}
      setSelectedValue={setSelectedNodeGroup}
      selectClassName={selectClassName}
      isMultiple={isMultiple}
    />
  );
};

export default NodeGroupSelect;
