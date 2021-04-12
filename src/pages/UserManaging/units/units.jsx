/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import useStyles from './units.styles';
import theme from '../../../theme';
import SearchBar from '../SearchBar/SearchBar';
import UnitCard from '../UnitCard/UnitCard';

const units = ({ numberOfUnits }) => {
    const classes = useStyles();
    const { t } = useTranslation();

  return (
    <div>
      <DashboardCard
        className={classes.units}
        backgroundColor={theme.palette.primary.main}
        height='45rem'
        width='17rem'
        ml='3.5rem'
        mt='-1rem'
      >
        <SearchBar />
        <p className={classes.unitsTitle}>{`${t('text.units')} (${numberOfUnits})`}</p>
        <UnitCard unitName='ספיר' numberOfUnitUsers={12} />
        <UnitCard unitName='שטל 121' numberOfUnitUsers={12} />
      </DashboardCard>
    </div>
  );
};

export default units;
