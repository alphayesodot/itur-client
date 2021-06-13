import { IconButton, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './RoleUsersDialog.styles.js';
import RoleUsersTable from '../RoleUsersTable/RoleUsersTable';
import RolesDialogsHeadLine from '../RolesDialogsHeadLine/RolesDialogsHeadLine';
import copyImg from '../../../../utils/images/userManagement/copy.svg';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog.jsx';

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
    <CustomDialog
      open={openDialog}
      onClose={() => setOpenUsersDialog(false)}
      title={t('title.users')}
      content={(
        <div className={classes.content}>
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
        )}
    />
  );
};

export default RoleUsersDialog;
