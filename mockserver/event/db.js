const events = [
  {
    id: '1',
    node: {
      id: '123',
      name: 'ראיון',
    },
    malshabShort: {
      identityNumber: '22222222',
      firstName: 'נועה',
      lastName: 'קירל',
    },
    time: `${new Date().toISOString().slice(0, 10)}T06:00:07.996+00:00`,
    location: 'place',
    interviewersIds: ['507f1f77bcf86cd799439021', '507f1f77bcf86cd799439013', '507f1f77bcf86cd799439012'],
    url: 'http://',
    results: { notes: [''], videoUrl: '111' },
  },
  {
    id: '2',
    node: {
      id: '123',
      name: 'ראיון',
    },
    malshabShort: {
      identityNumber: '9999999',
      firstName: 'דנה',
      lastName: 'זרמון',
    },
    time: `${new Date().toISOString().slice(0, 10)}T15:30:07.996+00:00`,
    location: 'place',
    interviewersIds: ['507f1f77bcf86cd799439033', '507f1f77bcf86cd799439021', '507f1f77bcf86cd799439013'],
    url: 'http://',
    results: { notes: [] },
  },
  {
    id: '507f1f77bcf86cd799439021',
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
    interviewersIds: ['507f1f77bcf86cd799439011'],
    url: 'http://',
    results: { notes: [''] },
  },
  {
    id: '4',
    node: {
      id: '123',
      name: 'ראיון',
    },
    malshabShort: {
      identityNumber: '55555555',
      firstName: 'ישראל',
      lastName: 'ישראלי',
    },
    time: `${new Date().toISOString().slice(0, 10)}T14:00:07.996+00:00`,
    location: 'place',
    interviewersIds: ['507f1f77bcf86cd799439012', '507f1f77bcf86cd799439021', '507f1f77bcf86cd799439033', '507f1f77bcf86cd799439022', '507f1f77bcf86cd799439023'],
    url: 'http://',
    results: { notes: [''] },
  },
  {
    id: '5',
    node: {
      id: '123',
      name: 'ראיון',
    },
    malshabShort: {
      identityNumber: '3333333',
      firstName: 'עדי',
      lastName: 'ביטי',
    },
    time: `${new Date().toISOString().slice(0, 10)}T10:30:07.996+00:00`,
    location: 'place',
    interviewersIds: ['507f1f77bcf86cd799439012', '507f1f77bcf86cd799439022', '507f1f77bcf86cd799439023'],
    url: 'http://',
    results: { notes: [] },
  },
  {
    id: '507f1f77bcf86ca7994390555',
    node: {
      id: '666',
      name: 'ראיון',
    },
    malshabShort: {
      identityNumber: '22222222',
      firstName: 'חיים',
      lastName: 'כהן',
    },
    time: `${new Date().toISOString().slice(0, 10)}T09:00:07.996+00:00`,
    location: 'place',
    interviewersIds: ['507f1f77bcf86cd799439011', '507f1f77bcf86cd799439031', '507f1f77bcf86cd799439032'],
    url: 'http://',
    results: { notes: [] },
  }];

export default events;
