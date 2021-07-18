const schemas = [
  {
    questions: [
      {
        title: 'כושר ביטוי (התנסחות רהוטה וממוקדת, ביטוי תכליתי וקוהרנטי, אוצר מילים רחב, יכולת רטורית, עמידה הצגה בפני קהל ',
        type: 'LINEAR_SCALE',
        required: true,
        min: {
          tag: 'חלש/ה ביותר',
          value: '1',
        },
        max: {
          tag: 'בולט/ת ביותר',
          value: 5,
        },
      },
    ],
    targetTypes: ['INTERVIEWER'],
    nodes: ['234abc1e810c19729de862ea'],
    name: 'מבחני מצב אמ"מ ',
    createdBy: {
      $oid: '60e6f6bd86422819c8df61bc',
    },
    updatedBy: {
      $oid: '60e6f6bd86422819c8df61bc',
    },
    createdAt: {
      $date: '2021-07-11T08:28:51.577Z',
    },
    updatedAt: {
      $date: '2021-07-11T08:28:51.577Z',
    },
    __v: 0,
  },
];

export default schemas;
