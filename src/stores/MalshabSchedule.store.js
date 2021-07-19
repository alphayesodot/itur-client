import { makeAutoObservable } from 'mobx';

class MalshabScheduleStore {
  selectedDate = new Date();
  selectedNodeGroup = '';

  constructor() {
    makeAutoObservable(this);
  }

  getSelectedDate() {
    return this.selectedDate;
  }

  getSelectedNodeGroup() {
    return this.selectedNodeGroup;
  }

  setSelectedDate(date) {
    this.selectedDate = date;
  }

  setSelectedNodeGroup(nodeGroup) {
    this.selectedNodeGroup = nodeGroup;
  }
}

const MalshabScheduleStoreInstance = new MalshabScheduleStore();
export default MalshabScheduleStoreInstance;
