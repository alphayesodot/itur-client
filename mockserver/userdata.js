import Role from './user/enum.js';

const users = [
  {
    _id: '507f1f77bcf86cd799439021',
    name: 'מראיין ביחידה 0',
    role: Role.Interviewer,
    unitId: '6061b0901d4dcf0fb047dede',
  },
  {
    _id: 1,
    name: 'רמד איתור ביחידה 0',
    role: Role.RamadIturOfUnit,
    unitId: '507f191e810c19729de862ea',
  },
  {
    _id: 2,
    name: 'אסיסטנט רמד איתור ביחידה 0',
    role: Role.RamadIturAssistant,
    unitId: '507f191e810c19729de862ea',
  },
  {
    _id: 3,
    name: 'רמד איתור מקצועי ביחידה 0',
    role: Role.RamadIturOfUnit,
    unitId: '507f191e810c19729de861ea',
  },
  {
    _id: 4,
    name: 'יוזר מדא',
    role: Role.Mada,
  },
  {
    _id: 5,
    name: 'יוזר איתור',
    role: Role.Itur,
  },
  {
    _id: 6,
    name: 'יוזר פסיכולוג',
    role: Role.Psychologist,
    unitId: '507f191e810c19729de862ea',
  },
  {
    _id: 7,
    name: 'יוזר דיאגנוזר',
    role: Role.Diagnoser,
    unitId: '507f191e810c19729de862ea',
  },
  {
    _id: 8,
    name: 'יוזר טכני',
    role: Role.Technical,
  },
];

export default users;
