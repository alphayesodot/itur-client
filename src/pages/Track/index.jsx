import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import UnitService from '../../services/unit.service';
import { UserService } from '../../services/user.service';
import Header from './components/Header/Header';
import TrackBoard from './components/TrackBoard/TrackBoard';
import useStyles from './index.styles';
import CustomBackDrop from '../../common/CustomBackDrop/CustomBackDrop';

const Track = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [unit, setUnit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [interviewers, setInterviewers] = useState([]);
  const [selectedNodeGroup, setSelectedNodeGroup] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }));

  useEffect(() => {
    setIsLoading(true);
    UnitService.getMyUnit().then((res) => {
      setUnit(res);
    }).catch(() => {
      toast(t('error.server'));
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (selectedNodeGroup) {
      setIsLoading(true);
      Promise.all(
        selectedNodeGroup?.usersIds?.map((userId) => UserService.getUserById(userId)),
      ).then((users) => {
        setInterviewers(users.filter((user) => user.role === 'INTERVIEWER'));
      }).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [selectedNodeGroup]);

  return (
    <div className={classes.root}>
      <Header
        unitName={unit?.name}
        selectedNodeGroup={selectedNodeGroup}
        setSelectedNodeGroup={setSelectedNodeGroup}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setIsLoading={setIsLoading}
        interviewers={interviewers}
      />
      {isLoading
        ? <CustomBackDrop />
        : (
          <>
            {selectedNodeGroup
              ? (
                <TrackBoard
                  nodeGroup={selectedNodeGroup}
                  date={new Date(selectedDate)}
                  interviewers={interviewers}
                />
              )
              : <Typography className={classes.message}>{t('message.chooseNodeGroup')}</Typography>}
          </>
        )}
    </div>
  );
});

export default Track;
