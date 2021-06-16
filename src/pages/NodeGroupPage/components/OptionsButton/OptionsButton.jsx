import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import moreImg from '../../../../utils/images/general/more.svg';
import useStyles from './OptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import NodeGroupService from '../../../../services/nodeGroup.service';
import CreationDialog from '../CreationDialog/CreationDialog';

const SelectCheckboxItem = ({ nodeGroup, UpdateAllNodeGroupList }) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();
  const [duringDeletion, setDuringDeletion] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  const handeOnCloseDialog = () => {
    setOpenEditDialog(false);
  };
  const handleDelete = () => {
    if (!duringDeletion) {
      setDuringDeletion(true);
      NodeGroupService.deleteNodeGroup(nodeGroup.id).then(async () => {
        UpdateAllNodeGroupList();
        setDuringDeletion(false);
      });
    }
  };

  return (
    <>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={() => { setOpenMenu(true); }}
        style={{ backgroundColor: 'transparent' }}
        className={classes.root}
      >
        <img height='15rem' src={moreImg} alt='see more' />
      </Button>
      <Menu
        id='simple-menu'
        open={openMenu}
        onClose={handleCloseMenu}
        className={classes.menu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={async () => {
          await handleDelete();
          handleCloseMenu();
        }}
        >
          <div className={classes.menuItem}>
            <img className={classes.img} width='15rem' src={deleteImg} alt='see more' />
            {t('actions.delete')}
          </div>
        </MenuItem>
        <MenuItem onClick={() => {
          setOpenEditDialog(true);
          handleCloseMenu();
        }}
        >
          <div className={classes.menuItem}>
            <img className={classes.img} width='17rem' src={editImg} alt='see more' />
            {t('actions.edit')}
          </div>
          <CreationDialog
            open={openEditDialog}
            onClose={handeOnCloseDialog}
            UpdateAllNodeGroupList={UpdateAllNodeGroupList}
            currentNodeGroup={nodeGroup}
          />
        </MenuItem>
      </Menu>
    </>

  );
};

export default SelectCheckboxItem;
