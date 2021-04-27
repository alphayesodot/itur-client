const events = [{
  _id: '1',
  node: {
    id: '123',
    name: 'ראיון',
  },
  malshabShort: {
    identityNumber: '22222222',
    firstName: 'נועה',
    lastName: 'קירל',
  },
  time: '2021-04-27T06:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['3', '6'],
  url: 'http://',
},
{
  _id: '2',
  node: {
    id: '123',
    name: 'ראיון',
  },
  malshabShort: {
    identityNumber: '22222222',
    firstName: 'חיים',
    lastName: 'כהן',
  },
  time: '2021-04-27T09:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['1', '2'],
  url: 'http://',
  results: { notes: [] },
}];

export default events;
