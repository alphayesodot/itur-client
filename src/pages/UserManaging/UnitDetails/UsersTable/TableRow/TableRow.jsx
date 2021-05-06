/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableCell,
  TableRow,
  TextField,
  IconButton,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import useStyles from './TableRow.styles.js';

const RowTable = ({ role, amount }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    console.log('openAdd', openAdd);
  }, [openAdd]);
  return (
    <TableRow key={role} className={classes.tableRow}>
      <TableCell align='center'>{role}</TableCell>
      <TableCell align='center'>{amount}</TableCell>
      <TableCell align='center'>
        <Button className={classes.permissionsButton}>{t('text.view')}</Button>
      </TableCell>
      <TableCell align='right'>
        <div className={classes.addDiv}>
          <IconButton className={openAdd ? classes.openButton : classes.closeButton} onClick={() => { setOpenAdd(!openAdd); }}>
            <AddIcon />
          </IconButton>
          {openAdd && (
            <div className={openAdd ? classes.showHiddenElements : classes.hiddenElements}>
              <TextField
                inputProps={{ type: 'number' }}
                className={classes.numberOfRoleUsers}
              />
              <Button variant='contained' className={classes.addUsersButton}>
                {t('button.addUsers')}
              </Button>
            </div>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
