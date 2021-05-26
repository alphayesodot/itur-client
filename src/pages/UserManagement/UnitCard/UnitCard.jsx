import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import UserService from '../../../services/user.service';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import useStyles from './UnitCard.styles';
import arrowImg from '../../../utils/images/userManagement/thin-arrow-icon.svg';

const UnitCard = ({ unit, isSelected, setSelectedUnit, users }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [unitUsers, setUnitusers] = useState([]);

  useEffect(async () => {
    setUnitusers(await UserService.getUsersByUnitId(unit.id));
  }, [users]);

  return (
    <div className={classes.root}>
      <DashboardCard className={isSelected ? classes.selectedCard : classes.card}>
        <div className={classes.mainDiv}>
          <div>
            <h1 className={classes.unitName}>{unit.name}</h1>
            <h4 className={isSelected ? classes.selectedCardText : classes.numberOfUsers}>{`${t('userManagement.text.users')} ${unitUsers.length}`}</h4>
          </div>
          <Button
            onClick={() => { setSelectedUnit(unit); }}
            className={classes.chooseButton}
            disableRipple
          >
            <img src={arrowImg} alt='choose' className={classes.chooseIcon} />
          </Button>
        </div>
      </DashboardCard>
    </div>
  );
};

export default UnitCard;
