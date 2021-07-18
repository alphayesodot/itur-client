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
          <Typography className={classes.section}>
            <strong className={classes.titles}>{t('text.unit')}</strong>
            {unit.name}
            {' | ' }
          </Typography>
          <Typography className={classes.section}>
            <strong className={classes.titles}>{t('title.role')}</strong>
            {role}
            {' | ' }
          </Typography>
          <Typography className={classes.section}>
            <strong className={classes.titles}>{t('title.amount')}</strong>
          </Typography>
          {users.length}
        </Typography>
      </div>
    </div>
  );
};

export default RolesDialogsHeadLine;
