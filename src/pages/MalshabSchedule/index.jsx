import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useStyles from './index.styles';
import NodeGroups from './components/NodeGroups/NodeGroups';
import NodeGroupService from '../../services/nodeGroup.service';
import UsersCard from './components/UsersCard/UsersCard';
import ScheduleHeader from '../../common/ScheduleHeader/ScheduleHeader';
import MalshabimCard from './components/MalshabimCard/MalshabimCard';
import UserService, { Role } from '../../services/user.service';
import UnitService from '../../services/unit.service';
import ScheduleStore from '../../stores/Schedule.store';
import EventService from '../../services/event.service';
import CustomBackDrop from '../../common/CustomBackDrop/CustomBackDrop';
import NodeService from '../../services/node.service';

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

  const handleMalshabsToSchedule = () => {
    // const handleMalshabsToSchedule = (chosenMalshabs, selectedScheduling) => {
    // console.log('malshabs', chosenMalshabs);
    // console.log('slectedScheduling', selectedScheduling);

    // if (selectedScheduling === t('unitControlPage.automaticScheduling')) {
    //   // TODO: automatic selected malshabs to interviewers
    // } else {
    //   chosenMalshabs.map((malshab) => {
    //     scheduleMalshabToInterviewers(malshab, selectedScheduling);
    //   });
    // }
  };

  // const scheduleMalshabToInterviewers = (malshab, selectedScheduling) => {
  //   const updatedInterviewers = interviewers.map((interviewer) => interviewer);
  // };

  useEffect(() => {
    if (choosenNodeGroup) {
      Promise.all(
        choosenNodeGroup?.usersIds?.map((userId) => UserService.getUserById(userId)),
      ).then(async (users) => {
        // TODO: BUG- ADD INTERVIEWERS INTO HEADER
        setInterviewers(users.filter((user) => user.role === Role.Interviewer));
        const nodesOfNodeGroup = await NodeService.getNodes({ nodeGroupId: choosenNodeGroup.id });
        Promise.all(
          nodesOfNodeGroup.map(({ id }) => (
            EventService.getEvents({ nodeId: id, date: selectedDate })
          )),
        ).then((eventsArrays) => {
          setEvents(eventsArrays.reduce((acc, eventsArray) => [...acc, ...eventsArray], []));
        });
      }).catch(() => {
        toast(t('error.server'));
      });
    }
    // TODO: update users when schedule store updates
  }, [choosenNodeGroup, selectedDate, ScheduleStore.schedules]);

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
      />
      {isLoading ? <CustomBackDrop /> : (
        <>
          {choosenNodeGroup ? (
            <div className={classes.mainInner}>
              <MalshabimCard
                interviewers={interviewers}
                events={events}
                handleMalshabsToSchedule={handleMalshabsToSchedule}
              />
              <UsersCard
                users={interviewers}
                choosenNodeGroup={choosenNodeGroup}
                selectedDate={selectedDate}
              />
            </div>
          )
            : (
              <NodeGroups
                unitNodesGroups={unitNodesGroups}
                setChoosenNodeGroup={setChoosenNodeGroup}
              />
            )}
        </>
      )}
    </div>
  );
};

export default MalshabSchedulePage;
