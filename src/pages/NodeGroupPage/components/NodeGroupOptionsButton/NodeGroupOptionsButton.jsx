import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import useStyles from './NodeGroupOptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import NodeGroupDialog from '../NodeGroupDialog/NodeGroupDialog';
import UserStoreInstance from '../../../../stores/User.store';
import { Role } from '../../../../services/user.service';
import OptionsButton from '../../../../common/OptionButton/OptionButton';

const NodeGroupOptionsButton = ({
  nodeGroup,
  setNodeGroupToDelete,
  setNodeGroupToAdd,
  setNodeGroupToEdit,
  duringDeletion,
  setDuringDeletion }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const userRole = UserStoreInstance.userProfile.role;

  const handleDelete = () => {
    try {
      if (!duringDeletion) {
        setDuringDeletion(true);
        setNodeGroupToDelete({ ...nodeGroup });
      }
    } catch {
      toast('error.server');
    }
  };
  const menuItems = [
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
    {
      onClick: async () => { await handleDelete(); },
      content: (
        <>
          <img className={classes.img} width='15rem' src={deleteImg} alt='see more' />
          {t('actions.delete')}
        </>
      ),
    },
  ];
  const dialog = (
    <NodeGroupDialog
      open={openEditDialog}
      onClose={() => { setOpenEditDialog(false); }}
      currentNodeGroup={nodeGroup}
      setNodeGroupToAdd={setNodeGroupToAdd}
      setNodeGroupToEdit={setNodeGroupToEdit}
    />
  );

  return (
    <OptionsButton menuItems={menuItems} popUps={[dialog]} />
  );
};

export default NodeGroupOptionsButton;
