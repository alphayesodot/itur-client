import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import NodeGroupService from '../../../../services/nodeGroup.service';
import NodeService from '../../../../services/node.service';
import useStyles from './NodeGroupDialog.styles';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog';
import SelectCheckboxItem from '../SelectCheckboxItem/SelectCheckboxItem';
import UserService, { Role } from '../../../../services/user.service';
import UserStoreInstance from '../../../../stores/User.store';

const NodeGroupDialog = ({ open,
  onClose,
  currentNodeGroup,
  setNodeGroupToAdd,
  setNodeGroupToEdit }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState('');
  const [prUsers, setPrUsers] = useState([]);
  const [riuAUsers, setRiuAUsers] = useState([]);
  const [evaluators, setEvaluators] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [checkedPrUsers, setCheckedPrUsers] = useState([]);
  const [checkedRiuAUsers, setCheckedRiuAUsers] = useState([]);
  const [checkedEvaluators, setCheckedEvaluators] = useState([]);
  const [checkedNodes, setCheckedNodes] = useState([]);
  const [duringSending, setDuringSending] = useState(false);

  const setCheckedUsers = (allUsers) => {
    const tempPr = [];
    const tempRuiA = [];
    const tempEvaluators = [];
    currentNodeGroup.usersIds.forEach((userId) => {
      const checkedUser = allUsers.find((user) => user.id === userId) || {};
      switch (checkedUser.role) {
        case Role.ProfessionalRamad:
          tempPr.push(checkedUser.id);
          break;

        case Role.RamadIturAssistant:
          tempRuiA.push(checkedUser.id);
          break;
        default:
          tempEvaluators.push(checkedUser.id);
      }
    });
    setCheckedPrUsers(tempPr);
    setCheckedRiuAUsers(tempRuiA);
    setCheckedEvaluators(tempEvaluators);
  };

  useEffect(() => {
    try {
      UserService.getUsers({ unitId: UserStoreInstance.userProfile.unitId }).then((users) => {
        setPrUsers(users.filter((user) => user.role === Role.ProfessionalRamad));
        setRiuAUsers(users.filter((user) => user.role === Role.RamadIturAssistant).map(
          ((riu) => ({ id: riu.id, label: riu.name })),
        ));
        setEvaluators(users.filter((user) => user.role !== Role.RamadIturAssistant
         && user.role !== Role.ProfessionalRamad));
        NodeService.getNodes().then((nodesRes) => {
          if (currentNodeGroup) {
            setNodes(nodesRes.filter((node) => !node.nodeGroupId || node.nodeGroupId === '' || node.nodeGroupId === currentNodeGroup.id));
            setCheckedNodes(nodesRes.filter((node) => node.nodeGroupId === currentNodeGroup.id)
              .map((node) => node.id));
          } else {
            setNodes(nodesRes.filter((node) => !node.nodeGroupId || node.nodeGroupId === ''));
          }
        });
        if (currentNodeGroup) {
          setCheckedUsers(users);
        }
      });
    } catch {
      toast(t('error.server'));
    }
  }, []);

  useEffect(async () => {
    if (!open) return;
    try {
      const allNodes = await NodeService.getNodes();
      if (!currentNodeGroup) {
        setNameValue('');
        setCheckedPrUsers([]);
        setCheckedEvaluators([]);
        setCheckedRiuAUsers([]);
        setCheckedNodes([]);
        setNodes(allNodes.filter((node) => !node.nodeGroupId || node.nodeGroupId === ''));
      } else {
        setNameValue(currentNodeGroup.name);
        UserService.getUsers({ unitId: UserStoreInstance.userProfile.unitId }).then((users) => {
          setCheckedUsers(users);
        });
        setNodes(allNodes.filter((node) => !node.nodeGroupId || node.nodeGroupId === '' || node.nodeGroupId === currentNodeGroup.id));
        setCheckedNodes(allNodes.filter((node) => node.nodeGroupId === currentNodeGroup.id)
          .map((node) => node.id));
      }
    } catch {
      toast(t('error.server'));
    }
  }, [open]);

  const onCreationSubmit = async () => {
    try {
      if (duringSending) return;
      setDuringSending(true);
      const createdNodeGroup = await NodeGroupService.createNodeGroup(nameValue);
      createdNodeGroup.usersIds = [...checkedPrUsers, ...checkedRiuAUsers, ...checkedEvaluators];
      await NodeGroupService.updateNodeGroup(createdNodeGroup.id, createdNodeGroup);
      checkedNodes.forEach(async (checkedNode) => {
        await NodeGroupService.updateNode(createdNodeGroup.id, checkedNode);
      });
      setNodeGroupToAdd({ ...createdNodeGroup });
      setDuringSending(false);
      onClose();
    } catch {
      toast(t('error.server'));
    }
  };

  const onEditSubmit = async () => {
    try {
      if (duringSending) return;
      setDuringSending(true);
      const checkedUsersIds = [...checkedPrUsers, ...checkedRiuAUsers, ...checkedEvaluators];
      const usersToRemove = currentNodeGroup.usersIds.filter((id) => !checkedUsersIds.includes(id));
      const usersToAdd = checkedUsersIds.filter((id) => !currentNodeGroup.usersIds.includes(id));
      const allNodes = await NodeService.getNodes();
      const nodesToAdd = allNodes.filter((node) => node.nodeGroupId === '' && checkedNodes.some((checkedNode) => checkedNode === node.id));
      const nodesToRemove = allNodes.filter(
        (node) => node.nodeGroupId === currentNodeGroup.id
        && !checkedNodes.some((checkedNode) => checkedNode === node.id),
      );
      usersToAdd.forEach(async (userId) => {
        await NodeGroupService.addUserToNodeGroup(currentNodeGroup.id, userId);
      });
      usersToRemove.forEach(async (userId) => {
        await NodeGroupService.removeUserFromNodeGroup(currentNodeGroup.id, userId);
      });
      nodesToAdd.forEach(async (node) => {
        await NodeGroupService.updateNode(currentNodeGroup.id, node.id);
      });
      nodesToRemove.forEach(async (node) => {
        await NodeGroupService.updateNode('', node.id);
      });
      const updatedNodeGroup = await NodeGroupService.updateNodeGroup(
        currentNodeGroup.id, { name: nameValue },
      );
      setNodeGroupToEdit(updatedNodeGroup);
      setDuringSending(false);
      onClose();
    } catch {
      toast(t('error.server'));
    }
  };

  const content = (
    <DialogContent className={classes.root}>
      <div className={classes.labeledInput}>
        <span className={classes.label}>{t('formTitle.name')}</span>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          type='text'
          variant='outlined'
          fullWidth
          value={nameValue}
          onChange={(e) => { setNameValue(e.target.value); }}
        />
      </div>
      <div className={classes.inputsLine}>
        <div className={classes.labeledInput}>
          <span>{t('roles.ramadIturAssistant')}</span>
          <SelectCheckboxItem
            data={riuAUsers}
            checkedValuesIds={checkedRiuAUsers}
            updateCheckedValuesIds={setCheckedRiuAUsers}
            selectId='riua-select'
            emptyMessage={t('message.noUsers')}
          />
        </div>
        <div className={classes.labeledInput}>
          <span>{t('roles.professionalRamad')}</span>
          <SelectCheckboxItem
            data={prUsers}
            checkedValuesIds={checkedPrUsers}
            updateCheckedValuesIds={setCheckedPrUsers}
            selectId='riu-select'
            emptyMessage={t('message.noUsers')}
          />
        </div>
      </div>
      <div className={classes.labeledInput}>
        <span>{t('roles.otherDiagnoses')}</span>
        <SelectCheckboxItem
          data={evaluators}
          checkedValuesIds={checkedEvaluators}
          updateCheckedValuesIds={setCheckedEvaluators}
          selectId='evaluators-select'
          emptyMessage={t('message.noUsers')}
        />
      </div>
      <div className={classes.labeledInput}>
        <span>{t('title.nodes')}</span>
        <SelectCheckboxItem
          data={nodes}
          checkedValuesIds={checkedNodes}
          updateCheckedValuesIds={setCheckedNodes}
          selectId='nodes-select'
          emptyMessage={t('message.noNodes')}
        />
      </div>
      <DialogActions classes={{ spacing: classes.actions }}>
        <Button
          className={classes.saveButton}
          onClick={currentNodeGroup ? onEditSubmit : onCreationSubmit}
        >
          {t('button.saveNodeGroup')}
        </Button>
      </DialogActions>
    </DialogContent>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={currentNodeGroup ? t('title.editNodeGroup') : t('title.newNodeGroup')}
      content={content}
    />
  );
};

export default NodeGroupDialog;
