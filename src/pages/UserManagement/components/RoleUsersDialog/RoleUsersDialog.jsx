import { Typography, Button, Dialog, IconButton, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './RoleUsersDialog.styles.js';
import RoleUsersTable from '../RoleUsersTable/RoleUsersTable';
import RolesDialogsHeadLine from '../RolesDialogsHeadLine/RolesDialogsHeadLine';
import addImg from '../../../../utils/images/userManagement/add-icon.svg';
import copyImg from '../../../../utils/images/userManagement/copy.svg';

const RoleUsersDialog = ({ users, role, unit, openDialog, setOpenUsersDialog }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const copyUsers = () => {
    const usernamesList = [];
    users.forEach((user) => {
      usernamesList.push(user.name);
    });
    navigator.clipboard.writeText(usernamesList);
  };

  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      aria-labelledby='simple-dialog-title'
      open={openDialog}
    >
      <div className={classes.root}>
        <div className={classes.titleDiv}>
          <Typography className={classes.usersTitle}>{t('userManagement.titles.users')}</Typography>
          <Button
            className={classes.closeButton}
            onClick={() => { setOpenUsersDialog(false); }}
            disableRipple
          >
            <img src={addImg} alt='close' className={classes.closeIcon} />
          </Button>
        </div>
        <RolesDialogsHeadLine users={users} role={role} unit={unit} />
        <div className={classes.mainDiv}>
          <RoleUsersTable users={users} />
          <Tooltip title={t('toolTip.copyUsers')}>
            <IconButton onClick={() => { copyUsers(); }}>
              <img src={copyImg} alt='copy' />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </Dialog>
  );
};

export default RoleUsersDialog;
