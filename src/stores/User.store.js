import makeAutoObservable from 'mobx';

class UserStore {
  userProfile;
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
