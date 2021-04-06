import { makeAutoObservable } from 'mobx';

class UserStore {
  userProfile;

  constructor() {
    makeAutoObservable(this);
  }
}

export default UserStore;
