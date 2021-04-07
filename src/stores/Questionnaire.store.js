import { makeAutoObservable } from 'mobx';

class QuestionnaireStore {
  currentInterview;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentInterview(value) {
    this.currentInterview = value;
  }
}

const UserStoreInstance = new QuestionnaireStore();
export default UserStoreInstance;
