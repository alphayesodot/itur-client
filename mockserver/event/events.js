// import moment from 'moment';

// const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');

// console.log(date); // 2015-09-13 03:39:27

// const stillUtc = moment.utc(date).toDate();
// const local = moment(stillUtc).local().format();

// console.log(local); // 2015-09-13 09:39:27
const events = [
  {
    node: {
      id: 0,
      name: 'מיון כללי',
    },
    malshab: {
      id: '30012345',
      firstName: "ג'ק",
      lastName: 'דניאלס',
    },
    time: new Date(new Date().getTime() - 600000),
    location: 'מיקום סודי ביותר',
    interviewersIds: ['12345', '11111'],
    url: 'xxxxxx',
    results: [],
    occured: false,
  },
];
console.log(events[0].time);
export default events;
