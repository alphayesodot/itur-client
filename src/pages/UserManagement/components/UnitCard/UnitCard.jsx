import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import UserService from '../../../../services/user.service';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './UnitCard.styles';
import arrowImg from '../../../../utils/images/userManagement/thin-arrow-icon.svg';
import config from '../../config';

const UnitCard = ({ unit, isSelected, setSelectedUnit, users }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [unitUsers, setUnitusers] = useState([]);

  useEffect(() => {
    if (unit.id === config.superUnitId) {
      UserService.getUsersByRoles(config.adminRoles).then((res) => {
        setUnitusers(res);
      }).catch(() => {
        toast(t('error.server'));
      });
    } else {
      UserService.getUsers({ unitId: unit.id }).then((res) => {
        setUnitusers(res);
      }).catch(() => {
        toast(t('error.server'));
      });
    }
    UserService.getUsers({ unitId: unit.id }).then((res) => {
      setUnitusers(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, [users]);

  return (
    <div className={classes.root}>
      <DashboardCard className={isSelected ? classes.selectedCard : classes.card}>
        <div className={classes.mainDiv}>
          <div>
            <h1 className={classes.unitName}>{unit.name}</h1>
            <h4 className={isSelected ? classes.selectedCardText : classes.numberOfUsers}>{`${t('text.users')} ${unitUsers.length}`}</h4>
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
