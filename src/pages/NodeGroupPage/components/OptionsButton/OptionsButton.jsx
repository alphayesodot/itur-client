import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import moreImg from '../../../../utils/images/general/more.svg';
import useStyles from './OptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import NodeGroupService from '../../../../services/nodeGroup.service';
import NodeGroupDialog from '../NodeGroupDialog/NodeGroupDialog';

const OptionsButton = ({ nodeGroup, updateAllNodeGroupList }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [duringDeletion, setDuringDeletion] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (!duringDeletion) {
      setDuringDeletion(true);
      NodeGroupService.deleteNodeGroup(nodeGroup.id).then(async () => {
        updateAllNodeGroupList();
        setDuringDeletion(false);
      });
    }
  };

  return (
    <>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleOnOpenMenu}
        style={{ backgroundColor: 'transparent' }}
        className={classes.root}
      >
        <img height='15rem' src={moreImg} alt='see more' />
      </Button>
      <Menu
        id='simple-menu'
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleOnCloseMenu}
        anchorEl={anchorEl}
        className={classes.menu}
      >
        <MenuItem onClick={async () => {
          await handleDelete();
          handleOnCloseMenu();
        }}
        >
          <div className={classes.menuItem}>
            <img className={classes.img} width='15rem' src={deleteImg} alt='see more' />
            {t('actions.delete')}
          </div>
        </MenuItem>
        <MenuItem onClick={() => {
          setOpenEditDialog(true);
          handleOnCloseMenu();
        }}
        >
          <div className={classes.menuItem}>
            <img className={classes.img} width='17rem' src={editImg} alt='see more' />
            {t('actions.edit')}
          </div>
        </MenuItem>
      </Menu>
      <NodeGroupDialog
        open={openEditDialog}
        onClose={() => { setOpenEditDialog(false); }}
        updateAllNodeGroupList={updateAllNodeGroupList}
        currentNodeGroup={nodeGroup}
      />
    </>
  );
};

export default OptionsButton;
