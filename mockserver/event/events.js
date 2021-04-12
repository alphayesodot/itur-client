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
    time: new Date(),
    location: 'מיקום סודי ביותר',
    interviewersIds: ['12345', '11111'],
    url: 'xxxxxx',
    results: [],
    occured: false,
  },
];
console.log(events[0].time);
export default events;
