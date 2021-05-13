const events = [
  {
    node: {
      id: 0,
      name: 'מיון כללי',
    },
    malshab: {
      id: '324828060',
      firstName: 'נעם יהונתן',
      lastName: 'קליינאוורדמן',
    },
    time: new Date('2021-05-09T11:28:02.072Z'),
    location: 'מיקום סודי ביותר',
    interviewersIds: ['12345', '11111'],
    url: 'xxxxxx',
    results: [],
    occured: false,
  },
];
console.log(events[0].time);
export default events;
