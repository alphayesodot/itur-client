import Role from './user/enum.js';

const users = [
  {
    userID: '507f1f77bcf86cd799439021',
    name: 'מראיין ביחידה 0',
    role: Role.Interviewer,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userID: 1,
    name: 'רמד איתור ביחידה 0',
    role: Role.RamadIturOfUnit,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userID: 2,
    name: 'אסיסטנט רמד איתור ביחידה 0',
    role: Role.RamadIturAssistant,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userID: 3,
    name: 'רמד איתור מקצועי ביחידה 0',
    role: Role.RamadIturOfUnit,
    unitId: '507f191e810c19729de861ea',
  },
  {
    userID: '60e6f6bd86422819c8df61bc',
    name: 'יוזר מדה',
    role: Role.Mada,
  },
  {
    userID: 5,
    name: 'יוזר איתור',
    role: Role.Itur,
  },
  {
    userID: 6,
    name: 'יוזר פסיכולוג',
    role: Role.Psychologist,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userID: 7,
    name: 'יוזר דיאגנוזר',
    role: Role.Diagnoser,
    unitId: '507f191e810c19729de862ea',
  },
  {
    userID: 8,
    name: 'יוזר טכני',
    role: Role.Technical,
  },
];

export default users;
