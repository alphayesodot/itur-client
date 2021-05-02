import { makeAutoObservable } from 'mobx';
import EventService from '../services/event.service';

class ScheduleStore {
  schedules;

  constructor() {
    makeAutoObservable(this);
  }

  getSchedule(date, nodeGroupId) {
    return this.schedules && this.schedules.find(
      (schedule) => schedule.date === date
       && schedule.nodeGroupId === nodeGroupId,
    );
  }

  async addNewSchedule(date, nodeGroup) {
    if (!this.schedules) {
      this.schedules = [];
    }
    await Promise.all(nodeGroup.usersIds.map((interviewerId) => ({
      interviewerId,
      interviews: EventService.getEvents({ interviewerId, date: new Date(date) }),
    }))).then((schedule) => {
      this.schedules.push({
        date,
        nodeGroupId: nodeGroup._id,
        schedule,
      });
    });
  }
}

const ScheduleStoreInstance = new ScheduleStore();
export default ScheduleStoreInstance;
