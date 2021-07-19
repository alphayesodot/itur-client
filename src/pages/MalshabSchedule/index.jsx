/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import useStyles from './index.styles';
import UsersCard from './components/UsersCard/UsersCard';
import ScheduleHeader from '../../common/ScheduleHeader/ScheduleHeader';
import MalshabimCard from './components/MalshabimCard/MalshabimCard';
import UserService, { Role } from '../../services/user.service';
import UnitService from '../../services/unit.service';
import ScheduleStore from '../../stores/Schedule.store';
import EventService from '../../services/event.service';
import NodeService from '../../services/node.service';
import MalshabScheduleStore from '../../stores/MalshabSchedule.store';
import config from '../../appConf.js';

const MalshabSchedulePage = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const [interviewers, setInterviewers] = useState([]);
  const [events, setEvents] = useState([]);
  const [unit, setUnit] = useState();
  const [isLoadingSchedule, setIsLoadingSchedule] = useState(false);

  useEffect(() => {
    if (!MalshabScheduleStore.selectedNodeGroup) {
      history.push(config.sitesPostfixes.nodeGroupSelection);
    }
    UnitService.getMyUnit()
      .then((res) => {
        setUnit(res);
      })
      .catch(() => {
        toast(t('error.server'));
      });
  }, []);

  const addMalshabToInterviewerSchedule = async (malshab, selectedInterviewerName) => {
    let isScheduled = false;
    const malshabEvent = events.find(
      (event) => event.malshabShort.id === malshab.id,
    );
    const selectedInterviewer = interviewers.find(
      (interviewer) => interviewer.name.includes(selectedInterviewerName),
    );
    const eventsOfSelectedInterviewer = events.filter(
      (event) => (event.interviewersIds.includes(selectedInterviewer.id)),
    );

    // check that interviewer doesn't have events in the same time
    if (!eventsOfSelectedInterviewer.find((event) => event.time === malshabEvent.time)) {
      const addedInterviewer = await EventService.addInterviewer(malshabEvent.id,
        selectedInterviewer.id);

      if (addedInterviewer) {
        ScheduleStore.addInterviewerToSchedule(
          MalshabScheduleStore.selectedNodeGroup.id,
          MalshabScheduleStore.selectedDate,
          selectedInterviewer.id,
          malshabEvent,
        );
        isScheduled = true;
      }
    }

    return { isScheduled, malshab };
  };

  const handleAutoScheduling = async (malshab) => {
    const malshabEvent = events.find(
      (event) => event.malshabShort.id === malshab.id,
    );
    let isScheduled = false;
    for (const interviewer of interviewers) {
      const eventsOfInterviewer = events.filter(
        (event) => (event.interviewersIds.includes(interviewer.id)),
      );

      const eventAtTheSameTime = eventsOfInterviewer.find(
        (event) => event.time === malshabEvent.time,
      );

      if (!eventAtTheSameTime) {
        // eslint-disable-next-line no-await-in-loop
        const addedInterviewer = await EventService.addInterviewer(malshabEvent.id, interviewer.id);
        if (addedInterviewer) {
          ScheduleStore.addInterviewerToSchedule(
            MalshabScheduleStore.selectedNodeGroup.id,
            MalshabScheduleStore.selectedDate,
            interviewer.id,
            malshabEvent,
          );
        }
        isScheduled = true;
        break;
      }
    }
    return { isScheduled, malshab };
  };

  const handleMalshabsToSchedule = (chosenMalshabs, selectedInterviewers) => {
    setIsLoadingSchedule(true);
    if (selectedInterviewers.includes(t('unitControlPage.automaticScheduling'))) {
      Promise.all(chosenMalshabs.map((malshab) => handleAutoScheduling(malshab)))
        .then((res) => {
          res.forEach((resObject) => {
            if (!resObject.isScheduled) {
              toast(t('error.scheduleConflictMalshab', { malshabFullName: resObject.malshab.name }));
            }
          });
        })
        .catch(() => {
          toast(t('error.server'));
        })
        .finally(() => setIsLoadingSchedule(false));
    } else {
      Promise.all(chosenMalshabs.map((malshab) => Promise.all(selectedInterviewers
        .map((interviewer) => addMalshabToInterviewerSchedule(malshab, interviewer)))
        .then((res) => {
          res.forEach((resObject) => {
            if (!resObject.isScheduled) {
              toast(t('error.scheduleConflictMalshab', { malshabFullName: resObject.malshab.name }));
            }
          });
        })))
        .catch(() => {
          toast(t('error.server'));
        })
        .finally(() => setIsLoadingSchedule(false));
    }
  };

  useEffect(() => {
    if (MalshabScheduleStore.selectedNodeGroup) {
      Promise.all(
        MalshabScheduleStore.selectedNodeGroup?.usersIds?.map(
          (userId) => UserService.getUserById(userId),
        ),
      )
        .then(async (users) => {
          setInterviewers(
            users.filter((user) => user.role === Role.Interviewer),
          );
          const nodesOfNodeGroup = await NodeService.getNodes({
            nodeGroupId: MalshabScheduleStore.selectedNodeGroup.id,
          });
          Promise.all(
            nodesOfNodeGroup.map(({ id }) => EventService.getEvents({
              nodeId: id,
              date: new Date(MalshabScheduleStore.selectedDate),
            })),
          ).then((eventsArrays) => {
            setEvents(
              eventsArrays.reduce(
                (acc, eventsArray) => [...acc, ...eventsArray],
                [],
              ),
            );
          });
        })
        .catch(() => {
          toast(t('error.server'));
        });
    }
  }, [
    MalshabScheduleStore.selectedNodeGroup,
    MalshabScheduleStore.selectedDate,
    ScheduleStore.schedules,
  ]);

  return (
    <div className={classes.root}>
      <ScheduleHeader
        unitName={unit?.name}
        selectedNodeGroup={MalshabScheduleStore.selectedNodeGroup}
        setSelectedNodeGroup={(value) => MalshabScheduleStore.setSelectedNodeGroup(value)}
        selectedDate={MalshabScheduleStore.selectedDate}
        setSelectedDate={(value) => MalshabScheduleStore.setSelectedDate(value)}
      />
      <div className={classes.mainInner}>
        <MalshabimCard
          interviewers={interviewers}
          events={events}
          handleMalshabsToSchedule={handleMalshabsToSchedule}
          isLoadingSchedule={isLoadingSchedule}
        />
        <UsersCard users={interviewers} />
      </div>
    </div>
  );
});

export default MalshabSchedulePage;
