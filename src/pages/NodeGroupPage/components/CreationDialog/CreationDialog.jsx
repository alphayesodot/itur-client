import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import NodeGroupService from '../../../../services/nodeGroup.service';
import NodeService from '../../../../services/node.service';
import useStyles from './CreationDialog.styles';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog';
import SelectCheckboxItem from '../SelectCheckboxItem/SelectCheckboxItem';
import { UserService } from '../../../../services/user.service';
import UserStoreInstance from '../../../../stores/User.store';

const CreationDialog = ({ open, onClose, UpdateAllNodeGroupList, currentNodeGroup }) => {
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

  const setCheckedUsers = (allUsers) => {
    const tempPr = [];
    const tempRuiA = [];
    const tempEvaluators = [];
    currentNodeGroup.usersIds.forEach((userId) => {
      const checkedUser = allUsers.find((user) => user.id === userId);
      switch (checkedUser.role) {
        case 'PROFETIONAL_RAMAD':
          tempPr.push(checkedUser.id);
          break;

        case 'RAMAD_ITUR_ASSISTANT':
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
    UserService.getUsersByUnitId(UserStoreInstance.userProfile.unitId).then((users) => {
      setPrUsers(users.filter((user) => user.role === 'PROFETIONAL_RAMAD'));
      setRiuAUsers(users.filter((user) => user.role === 'RAMAD_ITUR_ASSISTANT'));
      setEvaluators(users.filter((user) => user.role !== 'RAMAD_ITUR_ASSISTANT' && user.role !== 'PROFETIONAL_RAMAD'));
      NodeService.getNodes().then((nodesRes) => {
        if (currentNodeGroup) {
          setNodes(nodesRes.filter((node) => !node.nodeGroupId || node.nodeGroupId === '' || node.nodeGroupId === currentNodeGroup.id));
          setCheckedNodes(nodesRes.filter((node) => node.nodeGroupId === currentNodeGroup.id));
        } else {
          setNodes(nodesRes.filter((node) => !node.nodeGroupId || node.nodeGroupId === ''));
        }
      });
      if (currentNodeGroup) {
        setCheckedUsers(users);
      }
    });
  }, []);

  useEffect(async () => {
    console.log(open);
    if (!open) return;

    const allNodes = await NodeService.getNodes();
    if (!currentNodeGroup) {
      setCheckedPrUsers([]);
      setCheckedEvaluators([]);
      setCheckedRiuAUsers([]);
      setCheckedNodes([]);
      setNodes(allNodes.filter((node) => !node.nodeGroupId || node.nodeGroupId === ''));
    } else {
      UserService.getUsersByUnitId(UserStoreInstance.userProfile.unitId).then((users) => {
        setCheckedUsers(users);
      });
      setNodes(allNodes.filter((node) => !node.nodeGroupId || node.nodeGroupId === '' || node.nodeGroupId === currentNodeGroup.id));
      setCheckedNodes(allNodes.filter((node) => node.nodeGroupId === currentNodeGroup.id));
    }
  }, [open]);

  const onCreationSubmit = async () => {
    try {
      const nodeGroup = await NodeGroupService.createNodeGroup(nameValue);
      nodeGroup.usersIds = [...checkedPrUsers, ...checkedRiuAUsers, ...checkedEvaluators];
      await NodeGroupService.updateNodeGroup(nodeGroup.id, nodeGroup);
      await UpdateAllNodeGroupList();
      onClose();
    } catch {
      toast(t('error.server'));
    }
  };

  const onEditSubmit = async () => {
    try {
      const checkedUsersIds = [...checkedPrUsers, ...checkedRiuAUsers, ...checkedEvaluators];
      const usersToRemove = currentNodeGroup.usersIds.filter((id) => !checkedUsersIds.includes(id));
      const usersToAdd = checkedUsersIds.filter((id) => !currentNodeGroup.usersIds.includes(id));
      usersToAdd.forEach(async (userId) => {
        await NodeGroupService.addUserToNodeGroup(currentNodeGroup, userId);
      });
      usersToRemove.forEach(async (userId) => {
        await NodeGroupService.removeUserFromNodeGroup(currentNodeGroup, userId);
      });
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
            emptyMessege={t('message.noUsers')}
          />
        </div>
        <div className={classes.labeledInput}>
          <span>{t('roles.professionalRamad')}</span>
          <SelectCheckboxItem
            data={prUsers}
            checkedValuesIds={checkedPrUsers}
            updateCheckedValuesIds={setCheckedPrUsers}
            selectId='riu-select'
            emptyMessege={t('message.noUsers')}
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
          emptyMessege={t('message.noUsers')}
        />
      </div>
      <div className={classes.labeledInput}>
        <span>{t('title.nodes')}</span>
        <SelectCheckboxItem
          data={nodes}
          checkedValuesIds={checkedNodes}
          updateCheckedValuesIds={setCheckedNodes}
          selectId='nodes-select'
          emptyMessege={t('title.noNodes')}
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
      title={t('title.newNodeGroup')}
      content={content}
    />
  );
};

export default CreationDialog;
