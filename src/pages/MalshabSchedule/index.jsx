/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useStyles from './index.styles';
import NodeGroups from './components/NodeGroups/NodeGroups';
import NodeGroupService from '../../services/nodeGroup.service';
import UsersCard from './components/UsersCard/UsersCard';
import ScheduleHeader from '../../common/ScheduleHeader/ScheduleHeader';
import MalshabimCard from './components/MalshabimCard/MalshabimCard';
import UserService from '../../services/user.service';
import UnitService from '../../services/unit.service';
import EventService from '../../services/event.service';

const MalshabSchedulePage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [choosenNodeGroup, setChoosenNodeGroup] = useState();
  const [unitNodesGroups, setUnitNodesGroups] = useState([]);
  const [interviewers, setInterviewers] = useState([]);
  const [events, setEvents] = useState([]);
  const [unit, setUnit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    NodeGroupService.getNodeGroups().then((res) => {
      setUnitNodesGroups(res);
    }).catch(() => {
      toast(t('error.server'));
    });
    UnitService.getMyUnit().then((res) => {
      setUnit(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  // useEffect(() => {
  //   UserService.getUsersByUnitId().then((res) => {
  //     setUsers(res.filter((user) => user.role === 'INTERVIEWER'));
  //   }).catch(() => {
  //     toast(t('error.server'));
  //   });
  // }, []);

  useEffect(() => {
    EventService.getEvents({ nodeId: '508f1f77bcf86cd7994390337' })
      .then((eventsData) => {
        setEvents(eventsData);
      });
    UserService.getUsersByUnitId().then((res) => {
      setUsers(res.filter((user) => user.role === 'INTERVIEWER'));
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  const handleMalshabsToSchedule = (chosenMalshabs, selectedScheduling) => {
    console.log('malshabs', chosenMalshabs);
    console.log('slectedScheduling', events);

    if (selectedScheduling === t('unitControlPage.automaticScheduling')) {
      // TODO: automatic selected malshabs to interviewers
    } else {
      chosenMalshabs.map((malshab) => {
        // scheduleMalshabToInterviewer(malshab, selectedScheduling);
      });
    }
  };

  // const scheduleMalshabToInterviewer = (malshab, selectedScheduling) => {
  //   const updatedInterviewers = interviewers.map((interviewer) => interviewer);
  // };

  useEffect(() => {
    if (choosenNodeGroup) {
      setIsLoading(true);
      Promise.all(
        choosenNodeGroup?.usersIds?.map((userId) => UserService.getUserById(userId)),
      ).then((res) => {
        setInterviewers(res.filter((user) => user.role === 'INTERVIEWER'));
      }).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [choosenNodeGroup]);

  return (
    <div className={classes.root}>
      <ScheduleHeader
        unitName={unit?.name}
        selectedNodeGroup={choosenNodeGroup}
        setSelectedNodeGroup={setChoosenNodeGroup}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setIsLoading={setIsLoading}
        interviewers={interviewers}
        selectFirst={false}
      />
      {choosenNodeGroup ? (
        <div className={classes.mainInner}>
          <MalshabimCard events={events} handleMalshabsToSchedule={handleMalshabsToSchedule} />
          <UsersCard users={interviewers} selectedDate={selectedDate} />
        </div>
      )
        : (
          <NodeGroups
            unitNodesGroups={unitNodesGroups}
            setChoosenNodeGroup={setChoosenNodeGroup}
          />
        )}
    </div>
  );
};

export default MalshabSchedulePage;
