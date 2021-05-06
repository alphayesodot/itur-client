import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './UnitCard.styles';

const UnitCard = ({ unit, numberOfUnitUsers, isSelected, setSelectedUnit }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DashboardCard className={isSelected ? classes.selectedCard : classes.card}>
        <div className={classes.mainDiv}>
          <div>
            <h1 className={classes.unitName}>{unit.name}</h1>
            <h4 className={isSelected ? classes.selectedCardText : classes.numberOfUsers}>{`${t('text.users')} ${numberOfUnitUsers}`}</h4>
          </div>
          <Button onClick={() => { setSelectedUnit(unit); }}>
            <img src='thin-arrow-icon.svg' alt='choose' className={classes.chooseIcon} />
          </Button>
        </div>

      </DashboardCard>
    </div>
  );
};

export default UnitCard;
