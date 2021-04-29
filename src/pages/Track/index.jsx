import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import UserStoreInstance from '../../stores/User.store';
import UnitService from '../../services/unit.service';
import Header from './components/Header/Header';
import TrackBoard from './components/TrackBoard/TrackBoard';
import useStyles from './index.styles';

const Track = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = UserStoreInstance.userProfile;
  const [unit, setUnit] = useState();

  useEffect(() => {
    UnitService.getUnitById(currentUser.unit).then((res) => {
      setUnit(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  return (
    <div className={classes.root}>
      <Header unit={unit} />
      <TrackBoard />
    </div>
  );
});

export default Track;
