import { makeAutoObservable } from 'mobx';

class UserStore {
  userProfile;
  events;

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

const UserStoreInstance = new UserStore();
export default UserStoreInstance;
