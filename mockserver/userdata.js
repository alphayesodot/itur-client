import Role from './user/enum.js';

const users = [
  {
    id: '507f1f77bcf86cd799439021',
    name: 'מראיין ביחידה 0',
    role: Role.Interviewer,
    unitId: '6061b0901d4dcf0fb047dede',
  },
  {
    id: 1,
    name: 'רמד איתור ביחידה 0',
    role: Role.RamadIturOfUnit,
    unitId: '507f191e810c19729de861ea',
  },
  {
    id: 2,
    name: 'אסיסטנט רמד איתור ביחידה 0',
    role: Role.RamadIturAssistant,
    unitId: '507f191e810c19729de862ea',
  },
  {
    id: 3,
    name: 'רמד איתור מקצועי ביחידה 0',
    role: Role.ProfessionalRamad,
    unitId: '507f191e810c19729de861ea',
  },
  {
    id: '60e6ae6f09f20d1d84c9dd20',
    name: 'יוזר מדה',
    role: Role.Mada,
  },
  {
    id: 5,
    name: 'יוזר איתור',
    role: Role.Itur,
  },
  {
    id: 6,
    name: 'יוזר פסיכולוג',
    role: Role.Psychologist,
    unitId: '507f191e810c19729de862ea',
  },
  {
    id: 7,
    name: 'יוזר דיאגנוזר',
    role: Role.Diagnoser,
    unitId: '507f191e810c19729de862ea',
  },
  {
    id: 8,
    name: 'יוזר טכני',
    role: Role.Technical,
  },
  {
    id: 9,
    name: 'יוזר רמד מקצועי',
    role: Role.ProfessionalRamad,
  },
];

export default users;
