import { makeAutoObservable } from 'mobx';
import EventService from '../services/event.service';

class ScheduleStore {
  schedules;

  constructor() {
    makeAutoObservable(this);
  }

  getScheduleOfNodeGroup(date, nodeGroupId) {
    return this.schedules ? this.schedules.find(
      (schedule) => new Date(schedule.date).getTime() === new Date(date).getTime()
        && schedule.nodeGroupId === nodeGroupId,
    ) : undefined;
  }

  getScheduleOfInterviewer(date, nodeGroupId, interviewerId) {
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
    return result;
  }

  async addNewSchedule(date, nodeGroup) {
    if (!this.schedules) {
      this.schedules = [];
    }
    const schedule = await Promise.all(
      nodeGroup.usersIds.map(async (interviewerId) => ({
        interviewerId,
        interviews: await EventService.getEvents({ interviewerId, date: new Date(date) }),
      })),
    );
    this.schedules.push({
      date: new Date(date),
      nodeGroupId: nodeGroup._id,
      schedule,
    });
  }
}

const ScheduleStoreInstance = new ScheduleStore();
export default ScheduleStoreInstance;
