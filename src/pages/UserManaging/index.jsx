import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import theme from '../../theme';
import UnitCard from './UnitCard/UnitCard';
import SearchBar from './SearchBar/SearchBar';

const UserManaging = ({ numberOfUnits }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <p className={classes.addUsersTitle}>{t('headerTitles.addUsers')}</p>
      <div className={classes.root}>
        <DashboardCard height='45rem' width='70rem' className={classes.unitDetails}>
          <h1>unit details</h1>
        </DashboardCard>
        <DashboardCard
          className={classes.units}
          backgroundColor={theme.palette.primary.main}
          height='45rem'
          width='17rem'
          ml='3.5rem'
        >
          <SearchBar />
          <p className={classes.unitsTitle}>{`${t('text.units')} (${numberOfUnits})`}</p>
          <UnitCard unitName='ספיר' numberOfUnitUsers={12} />
          <UnitCard unitName='שטל 121' numberOfUnitUsers={12} />

        </DashboardCard>
      </div>
      <Button variant='contained' className={classes.addUnitButton}>
        {t('button.addUnit')}
      </Button>
    </>
  );
};

export default UserManaging;
