import { makeAutoObservable } from 'mobx';

class UnitsStore {
  units =[
    { unitName: 'name' },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  initiateUnits(unitsArray) {
    this.units = [...this.units, unitsArray];
  }

  addUnit(unit) {
    this.units = [...this.units, unit];
  }
}

const UnitsStoreInstance = new UnitsStore();
export default UnitsStoreInstance;
