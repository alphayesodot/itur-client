import { makeAutoObservable } from 'mobx';

class UserStore {
  // TODO: Delete default value
  userProfile = { id: 4 };
  eventsData;

  constructor() {
    makeAutoObservable(this);
  }

  setUserProfile(value) {
    this.userProfile = value;
  }
  setEventsData(value) {
    this.eventsData = value;
  }
}

const UserStoreInstance = new UserStore();
export default UserStoreInstance;
