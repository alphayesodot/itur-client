import Role from './user/enum.js';

const users = [
  {
    userId: '507f1f77bcf86cd799439021',
    name: 'מראיין ביחידה 0',
    role: Role.Interviewer,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userId: 1,
    name: 'רמד איתור ביחידה 0',
    role: Role.RamadIturOfUnit,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userId: 2,
    name: 'אסיסטנט רמד איתור ביחידה 0',
    role: Role.RamadIturAssistant,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userId: 3,
    name: 'רמד איתור מקצועי ביחידה 0',
    role: Role.RamadIturOfUnit,
    unitId: '507f191e810c19729de861ea',
  },
  {
    userId: 4,
    name: 'יוזר מדא',
    role: Role.Mada,
  },
  {
    userId: 5,
    name: 'יוזר איתור',
    role: Role.Itur,
  },
  {
    userId: 6,
    name: 'יוזר פסיכולוג',
    role: Role.Psychologist,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userId: 7,
    name: 'יוזר דיאגנוזר',
    role: Role.Diagnoser,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userId: 8,
    name: 'יוזר טכני',
    role: Role.Technical,
  },
];

export default users;
