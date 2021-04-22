import { makeAutoObservable } from 'mobx';

class ScheduleStore {
  schedule = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNewSchedule(date, node, events) {
    this.schedule.push(events);
  }
}

const ScheduleStoreInstance = new ScheduleStore();
export default ScheduleStoreInstance;
