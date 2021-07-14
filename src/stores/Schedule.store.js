import { makeObservable, observable } from 'mobx';
import EventService from '../services/event.service';

class ScheduleStore {
  schedules = [];

  constructor() {
    makeObservable(this, {
      schedules: observable,
    });
  }

  getScheduleOfNodeGroup(date, nodeGroupId) {
    return this.schedules ? this.schedules.find(
      (schedule) => new Date(schedule.date).toDateString() === new Date(date).toDateString()
        && schedule.nodeGroupId === nodeGroupId,
    ) : undefined;
  }

  async getScheduleOfInterviewer(date, nodeGroupId, interviewerId) {
    let result;
    if (this.schedules) {
      const scheduleOfNodeGroup = this.getScheduleOfNodeGroup(date, nodeGroupId);
      if (scheduleOfNodeGroup) {
        const searchedInterviewerObject = scheduleOfNodeGroup.schedule.find(
          (interviewerObject) => interviewerObject.interviewerId === interviewerId,
        );
        result = searchedInterviewerObject ? searchedInterviewerObject.interviews : undefined;
      }
    }
    return result || EventService.getEvents({ interviewerId, date: new Date(date) });
  }

  async addNewSchedule(date, nodeGroup, interviewers) {
    const schedule = await Promise.all(
      interviewers.map(async (interviewer) => ({
        interviewerId: interviewer.id,
        interviews: await EventService.getEvents({
          interviewerId: interviewer.id,
          date: new Date(date),
        }),
      })),
    );

    this.schedules = [...this.schedules, {
      date: new Date(date),
      nodeGroupId: nodeGroup.id,
      schedule,
    }];
  }

  removeInterviewFromSchedule = (searchedNodeGroupId, searchedDate, userId, eventId) => {
    this.schedules = this.schedules.map((schedule) => {
      if (searchedNodeGroupId === schedule.nodeGroupId
        && new Date(searchedDate).toDateString() === new Date(schedule.date).toDateString()) {
        const searchedSchedule = schedule.schedule
          .find(({ interviewerId }) => interviewerId === userId);
        if (searchedSchedule) {
          searchedSchedule.interviews = searchedSchedule.interviews
            .filter((({ id }) => id !== eventId));
        }
      }
      return schedule;
    });
  };

  addInterviewerToSchedule = (searchedNodeGroupId, searchedDate, userId, newEvent) => {
    this.schedules = this.schedules.map((schedule) => {
      if (searchedNodeGroupId === schedule.nodeGroupId
        && new Date(searchedDate).toDateString() === new Date(schedule.date).toDateString()) {
        const searchedSchedule = schedule.schedule
          .find(({ interviewerId }) => interviewerId === userId);
        if (searchedSchedule) {
          searchedSchedule.interviews.push(newEvent);
        }
      }
      return schedule;
    });
  };
}

const ScheduleStoreInstance = new ScheduleStore();
export default ScheduleStoreInstance;
