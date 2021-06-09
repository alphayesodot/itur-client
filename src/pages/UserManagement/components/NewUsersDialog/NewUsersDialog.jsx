import { Typography, Button, Dialog, IconButton, Tooltip, Snackbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Alert } from '@material-ui/lab';
import useStyles from './NewUsersDialog.styles.js';
import NewUsersTable from '../NewUsersTable/NewUsersTable.jsx';
import RolesDialogsHeadLine from '../RolesDialogsHeadLine/RolesDialogsHeadLine';
import addImg from '../../../../utils/images/userManagement/add-icon.svg';
import copyImg from '../../../../utils/images/userManagement/copy.svg';

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
      usernamesList.push(JSON.stringify({ name: user.name, password: user.password }));
    });
    navigator.clipboard.writeText(usernamesList);
  };

  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      onClose={() => setOpenNewUsersDialog(false)}
      aria-labelledby='simple-dialog-title'
      open={openNewUsersDialog}
    >
      <div className={classes.root}>
        <div className={classes.titleDiv}>
          <Typography className={classes.usersTitle}>{t('title.newUsers')}</Typography>
          <Button className={classes.closeButton} onClick={() => { closeDialog(); }}>
            <img src={addImg} alt='close' className={classes.closeIcon} />
          </Button>
        </div>
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
    </Dialog>
  );
};

export default NewUsersDialog;
