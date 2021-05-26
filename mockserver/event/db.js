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
  time: '2021-05-09T06:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['3', '6', '5'],
  url: 'http://',
  results: { notes: [] },
},
{
  _id: '3',
  node: {
    id: '123',
    name: 'ראיון',
  },
  malshabShort: {
    identityNumber: '9999999',
    firstName: 'דנה',
    lastName: 'זרמון',
  },
  time: '2021-05-09T07:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['3', '6'],
  url: 'http://',
  results: { notes: [''] },
},
{
  _id: '3',
  node: {
    id: '666',
    name: 'ראיון',
  },
  malshabShort: {
    identityNumber: '9999999',
    firstName: 'דנה',
    lastName: 'זרמון',
  },
  time: '2021-05-10T12:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['4', '7', '2'],
  url: 'http://',
  results: { notes: [] },
},
{
  _id: '4',
  node: {
    id: '123',
    name: 'ראיון',
  },
  malshabShort: {
    identityNumber: '55555555',
    firstName: 'ישראל',
    lastName: 'ישראלי',
  },
  time: '2021-05-09T14:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['5', '12', '9'],
  url: 'http://',
  results: { notes: [] },
},
{
  _id: '4',
  node: {
    id: '123',
    name: 'ראיון',
  },
  malshabShort: {
    identityNumber: '3333333',
    firstName: 'עדי',
    lastName: 'ביטי',
  },
  time: '2021-05-09T10:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['5', '12', '9'],
  url: 'http://',
  results: { notes: [''] },
},
{
  _id: '2',
  node: {
    id: '666',
    name: 'ראיון',
  },
  malshabShort: {
    identityNumber: '22222222',
    firstName: 'חיים',
    lastName: 'כהן',
  },
  time: '2021-05-09T09:00:07.996+00:00',
  location: 'place',
  interviewersIds: ['1', '2'],
  url: 'http://',
  results: { notes: [] },
}];

export default events;
