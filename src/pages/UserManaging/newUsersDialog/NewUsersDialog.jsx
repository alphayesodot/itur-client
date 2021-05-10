import { Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './NewUsersDialog.styles.js';
import NewUsersTable from './newUsersTable/NewUsersTable.jsx';

const NewUsersDialog = ({ users, role, unit, setOpenNewUsersDialog }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.titleDiv}>
        <Typography className={classes.usersTitle}>{t('text.newUsers')}</Typography>
        <Button className={classes.closeButton} onClick={() => { setOpenNewUsersDialog(false); }}>
          <img src='add-icon.svg' alt='close' className={classes.closeIcon} />
        </Button>
      </div>
      <div className={classes.mainDiv}>
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
      <NewUsersTable users={users} />

    </div>
  );
};

export default NewUsersDialog;
