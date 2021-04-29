import { makeAutoObservable } from 'mobx';

class ScheduleStore {
  schedules = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNewSchedule(date, nodeGroupId) {
    this.schedules.push({
      date,
      nodeGroupId,
      schedule: [{
        interviewer: {
          _id: '',
          name: '',
        },
        interviews: [{
          time: '',
          results: [],
          malshabShort: {
            firstName: '',
            lastName: '',
            identityNumber: 1,
          },
        }],
      }],
    });
  }
}

const ScheduleStoreInstance = new ScheduleStore();
export default ScheduleStoreInstance;
