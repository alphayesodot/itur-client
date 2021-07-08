import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './NodeGroupOptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import NodeGroupService from '../../../../services/nodeGroup.service';
import NodeGroupDialog from '../NodeGroupDialog/NodeGroupDialog';
import UserStoreInstance from '../../../../stores/User.store';
import { Role } from '../../../../services/user.service';
import OptionsButton from '../../../../common/OptionButton/OptionButton';

const NodeGroupOptionsButton = ({ nodeGroup, createAllNodeGroupList, setIdToDelete }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [duringDeletion, setDuringDeletion] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const userRole = UserStoreInstance.userProfile.role;

  const handleDelete = () => {
    if (!duringDeletion) {
      setDuringDeletion(true);
      NodeGroupService.deleteNodeGroup(nodeGroup.id).then(async () => {
        setIdToDelete(nodeGroup.id);
        setDuringDeletion(false);
      });
    }
  };
  const menuItems = [
    {
      onClick: async () => { await handleDelete(); },
      content: (
        <>
          <img className={classes.img} width='15rem' src={deleteImg} alt='see more' />
          {t('actions.delete')}
        </>
      ),
    },
    userRole === Role.RamadIturOfUnit
    && {
      onClick: () => {
        setOpenEditDialog(true);
      },
      content: (
        <>
          <img className={classes.img} width='17rem' src={editImg} alt='see more' />
          {t('actions.edit')}
        </>
      ),
    },
  ];
  const dialog = (
    <NodeGroupDialog
      open={openEditDialog}
      onClose={() => { setOpenEditDialog(false); }}
      createAllNodeGroupList={createAllNodeGroupList}
      currentNodeGroup={nodeGroup}
    />
  );

  return (
    <OptionsButton menuItems={menuItems} popUps={[dialog]} />
  );
};

export default NodeGroupOptionsButton;
