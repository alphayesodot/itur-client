import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import UserStore from '../../stores/User.store';
import UnitService from '../../services/unit.service';
import Header from './components/Header/Header';
import TrackBoard from './components/TrackBoard/TrackBoard';
import useStyles from './index.styles';

const Track = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = UserStore.userProfile;
  const [unit, setUnit] = useState();
  const [selectedNodeGroup, setSelectedNodeGroup] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }));

  useEffect(() => {
    UnitService.getUnitById(currentUser.unit).then((res) => {
      setUnit(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  return (
    <div className={classes.root}>
      <Header
        unit={unit}
        selectedNodeGroup={selectedNodeGroup}
        setSelectedNodeGroup={setSelectedNodeGroup}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TrackBoard nodeGroup={selectedNodeGroup} />
    </div>
  );
});

export default Track;
