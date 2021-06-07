import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import UserStore from '../../stores/User.store';
import UnitService from '../../services/unit.service';
import Header from './components/Header/Header';
import TrackBoard from './components/TrackBoard/TrackBoard';
import useStyles from './index.styles';
import CustomeBackDrop from '../../common/CustomeBackDrop/CustomeBackDrop';

const Track = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = UserStore.userProfile;
  const [unit, setUnit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNodeGroup, setSelectedNodeGroup] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }));

  useEffect(() => {
    setIsLoading(true);
    UnitService.getUnitById(currentUser.unit).then((res) => {
      setUnit(res);
    }).catch(() => {
      toast(t('error.server'));
    }).finally(() => {
      setIsLoading(false);
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
        setIsLoading={setIsLoading}
      />
      {isLoading
        ? <CustomeBackDrop />
        : (
          <>
            {selectedNodeGroup
              ? <TrackBoard nodeGroup={selectedNodeGroup} date={new Date(selectedDate)} />
              : <Typography className={classes.message}>{t('message.chooseNodeGroup')}</Typography>}
          </>
        )}
    </div>
  );
});

export default Track;
