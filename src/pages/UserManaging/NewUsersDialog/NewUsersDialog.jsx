import { Typography, Button, Dialog, IconButton, Tooltip, Snackbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Alert } from '@material-ui/lab';
import useStyles from './NewUsersDialog.styles.js';
import NewUsersTable from '../NewUsersTable/NewUsersTable.jsx';

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
      usernamesList.push(user.name);
      usernamesList.push('DFGJKL123456');
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
          <Typography className={classes.usersTitle}>{t('text.newUsers')}</Typography>
          <Button className={classes.closeButton} onClick={() => { closeDialog(); }}>
            <img src='add-icon.svg' alt='close' className={classes.closeIcon} />
          </Button>
        </div>
        <div className={classes.mainHeadLineDiv}>
          <div className={classes.headLine}>
            <Typography style={{ wordSpacing: '1rem' }}>
              <strong className={classes.titles}>{t('text.unit')}</strong>
              {unit.name}
            </Typography>
            <Typography>|</Typography>
            <Typography>
              <strong className={classes.titles}>{t('text.role')}</strong>
              {role}
            </Typography>
            <Typography>|</Typography>
            <Typography>
              <strong style={{ marginRight: '-1rem' }} className={classes.titles}>{t('text.amount')}</strong>
              {users.length}
            </Typography>
          </div>

        </div>
        <div className={classes.mainDiv}>
          <NewUsersTable users={users} />
          <Tooltip title={t('toolTip.copyUsers')}>
            <IconButton onClick={() => { copyUsers(); }}>
              <img src='copy.svg' alt='copy' />
            </IconButton>
          </Tooltip>
          <Snackbar
            open
          >
            <Alert severity='error' variant='filled' style={{ marginBottom: '15%' }}>
              <Typography style={{ fontSize: '1.1rem' }}>
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
