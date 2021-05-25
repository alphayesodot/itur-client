import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './RolesDialogsHeadLine.styles';

const RolesDialogsHeadLine = ({ users, role, unit }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (

    <div className={classes.root}>
      <div className={classes.headLine}>
        <Typography className={classes.unitTitle}>
          <strong className={classes.titles}>{t('userManagement.unit')}</strong>
          {unit.name}
        </Typography>
        <Typography>|</Typography>
        <Typography>
          <strong className={classes.titles}>{t('userManagement.role')}</strong>
          {role}
        </Typography>
        <Typography>|</Typography>
        <Typography>
          <strong className={classes.titles}>{t('userManagement.amount')}</strong>
          {users.length}
        </Typography>
      </div>
    </div>
  );
};

export default RolesDialogsHeadLine;
