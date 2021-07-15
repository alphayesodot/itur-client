/* eslint-disable react/no-array-index-key */
import React, { useState, MouseEvent } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import moreImg from '../../utils/images/general/more.svg';
import useStyles from './OpetionButton.styles';

/**
 *
 * @param {*} menuItems array of objects with the properties: onClick, content(=the button tag)
 * @param {*} popUps array of dialogs that may be called from this button
 * @returns This is a button with '3-dots-menu', which opens an options menue
 */
const OptionsButton = ({ menuItems, popUps }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
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
        {menuItems.map((menuItem, i) => (
          menuItem
          && (
          <MenuItem
            key={i}
            onClick={() => {
              menuItem.onClick();
              handleOnCloseMenu();
            }}
          >
            <div className={classes.menuItem}>
              {menuItem.content}
            </div>
          </MenuItem>
          )
        ))}
      </Menu>
      {popUps?.map((popUp, i) => <div key={i}>{popUp}</div>)}
    </>
  );
};

export default OptionsButton;
