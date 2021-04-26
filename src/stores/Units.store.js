import { makeAutoObservable } from 'mobx';

class UnitsStore {
  units =[]; // TODO: initiate units

  constructor() {
    makeAutoObservable(this);
  }

  setUserProfile(value) {
    this.userProfile = value;
  }
  setEvents(value) {
    this.events = value;
  }
}

const UnitsStoreInstance = new UnitsStore();
export default UnitsStoreInstance;
