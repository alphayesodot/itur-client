const nodeTypes = {
  exam: 'EXAM',
  interview: 'INTERVIEW',
  physical: 'PHYSICAL',
  unknown: 'UNKNOWN',
};

const nodes = [
  {
    id: '234abc1e810c19729de862ea',
    name: 'node-1',
    type: nodeTypes.exam,
    unitId: '507f191e810c19729de861ea',
    nodeGroupId: '507f1f77bcf86cd7994390555',
  },
  {
    id: '234abc1e810c19729de862eb',
    name: 'node-2',
    type: nodeTypes.interview,
    unitId: '507f191e810c19729de861ea',
    nodeGroupId: '',
  },
  {
    id: '234abc1e810c19729de862ea',
    name: 'node-3',
    type: nodeTypes.physical,
    unitId: '507f191e810c19729de862ea',
    nodeGroupId: '',
  },
];

export default nodes;
