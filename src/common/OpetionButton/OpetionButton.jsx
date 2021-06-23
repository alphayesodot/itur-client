import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import moreImg from '../../utils/images/general/more.svg';
import useStyles from './OptionsButton.styles';

const OptionsButton = ({ menueItems }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnCloseMenu = () => {
    setAnchorEl(null);
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
        <img className={classes.optionIcon} src={moreImg} alt='see more' />
      </Button>
      <Menu
        id='simple-menu'
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleOnCloseMenu}
        anchorEl={anchorEl}
        className={classes.menu}
      >
        {menueItems.map((menuItem) => menuItem)}
      </Menu>

    </>
  );
};

export default OptionsButton;
