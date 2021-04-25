import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import useStyles from './UnitCard.styles';

const UnitCard = ({ unitName, numberOfUnitUsers }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DashboardCard className={classes.card}>
        <h1 className={classes.unitName}>{unitName}</h1>
        <h4 className={classes.numberOfUsers}>{`${t('text.users')} ${numberOfUnitUsers}`}</h4>
      </DashboardCard>
    </div>
  );
};

export default UnitCard;
