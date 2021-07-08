import { Typography, IconButton, Tooltip, Snackbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Alert } from '@material-ui/lab';
import useStyles from './NewUsersDialog.styles.js';
import NewUsersTable from '../NewUsersTable/NewUsersTable.jsx';
import RolesDialogsHeadLine from '../RolesDialogsHeadLine/RolesDialogsHeadLine';
import copyImg from '../../../../utils/images/userManagement/copy.svg';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog.jsx';

const NewUsersDialog = ({
  users,
  role,
  unit,
  openNewUsersDialog,
  setOpenNewUsersDialog,
  setUsersToAdd,
  setNumberOfUsersToAdd }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const closeDialog = () => {
    setUsersToAdd([]);
    setOpenNewUsersDialog(false);
    setNumberOfUsersToAdd(0);
  };

  const copyUsers = () => {
    const usernamesList = [];
    users.forEach((user) => {
      usernamesList.push(JSON.stringify({ mail: user.mail, password: user.password }));
    });
    navigator.clipboard.writeText(usernamesList);
  };

  return (
    <CustomDialog
      open={openNewUsersDialog}
      onClose={closeDialog}
      title={t('title.newUsers')}
      content={(
        <div className={classes.content}>
          <RolesDialogsHeadLine users={users} role={role} unit={unit} />
          <div className={classes.mainDiv}>
            <NewUsersTable users={users} />
            <Tooltip title={t('toolTip.copyUsers')}>
              <IconButton onClick={() => { copyUsers(); }}>
                <img src={copyImg} alt='copy' />
              </IconButton>
            </Tooltip>
            <Snackbar open>
              <Alert severity='error' variant='filled' className={classes.alert}>
                <Typography className={classes.savePassWarning}>
                  {t('warnings.oneTimePassword')}
                </Typography>
              </Alert>
            </Snackbar>
          </div>
        </div>
      )}
    />
  );
};

export default NewUsersDialog;
