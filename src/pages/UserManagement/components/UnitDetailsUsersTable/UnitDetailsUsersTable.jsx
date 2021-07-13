import {
  Table,
  TableCell,
  TableHead,
  Paper,
  TableContainer,
  TableBody,
  TableRow,
} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './UnitDetailsUsersTable.styles';
import UnitDetailsTableRow from '../UnitDetailsTableRow/UnitDetailsTableRow';
import { Role } from '../../../../services/user.service';

const UnitDetailsUsersTable = ({ users, setUsers, unit, isUserAdmin }) => {
  const { t } = useTranslation();
  const [interviewers, setInterviewers] = useState([]);
  const [unitRamadsItur, setUnitRamadsItur] = useState([]);
  const [unitRamadIturAssistants, setUnitRamadIturAssistants] = useState([]);
  const [professionalRamads, setProfessionalRamads] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const [madaUsers, setMadaUsers] = useState([]);
  const [techUsers, setTechUsers] = useState([]);
  const [iturUsers, setIturUsers] = useState([]);
  const headlines = [t('title.role'), t('title.amount'), t('title.permissions')];
  const roleObjects = isUserAdmin
    ? [
      {
        roleToDisplay: t('roles.mada'),
        role: Role.Mada,
        list: madaUsers,
        setList: setMadaUsers,
      },
      {
        roleToDisplay: t('roles.technical'),
        role: Role.Technical,
        list: techUsers,
        setList: setTechUsers,
      },
      {
        roleToDisplay: t('roles.itur'),
        role: Role.Itur,
        list: iturUsers,
        setList: setIturUsers,
      },
    ]
    : [
      {
        roleToDisplay: t('roles.interviewer'),
        role: Role.Interviewer,
        list: interviewers,
        setList: setInterviewers,
      },
      {
        roleToDisplay: t('roles.ramadIturOfUnit'),
        role: Role.RamadIturOfUnit,
        list: unitRamadsItur,
        setList: setUnitRamadsItur,
      },
      {
        roleToDisplay: t('roles.ramadIturAssistant'),
        role: Role.RamadIturAssistant,
        list: unitRamadIturAssistants,
        setList: setUnitRamadIturAssistants,
      },
      {
        roleToDisplay: t('roles.professionalRamad'),
        role: Role.ProfessionalRamad,
        list: professionalRamads,
        setList: setProfessionalRamads,
      },
      {
        roleToDisplay: t('roles.psychologist'),
        role: Role.Psychologist,
        list: psychologists,
        setList: setPsychologists,
      },
      {
        roleToDisplay: t('roles.diagnoser'),
        role: Role.Diagnoser,
        list: diagnostics,
        setList: setDiagnostics,
      },
    ];

  const classes = useStyles();
  const sortUsersByRole = () => {
    users.forEach((user) => {
      switch (user.role) {
        case Role.Interviewer:
          setInterviewers((prevValue) => [...prevValue, user]);
          break;
        case Role.RamadIturOfUnit:
          setUnitRamadsItur((prevValue) => [...prevValue, user]);
          break;
        case Role.RamadIturAssistant:
          setUnitRamadIturAssistants((prevValue) => [...prevValue, user]);
          break;
        case Role.ProfessionalRamad:
          setProfessionalRamads((prevValue) => [...prevValue, user]);
          break;
        case Role.Psychologist:
          setPsychologists((prevValue) => [...prevValue, user]);
          break;
        case Role.Diagnoser:
          setDiagnostics((prevValue) => [...prevValue, user]);
          break;
        case Role.Mada:
          setMadaUsers((prevValue) => [...prevValue, user]);
          break;
        case Role.Technical:
          setTechUsers((prevValue) => [...prevValue, user]);
          break;
        case Role.Itur:
          setIturUsers((prevValue) => [...prevValue, user]);
          break;
        default:
      }
    });
  };

  useEffect(() => {
    console.log('unit', unit);
    console.log('users.length', users.length);
    setMadaUsers([]);
    setTechUsers([]);
    setIturUsers([]);
    setInterviewers([]);
    setUnitRamadsItur([]);
    setUnitRamadIturAssistants([]);
    setProfessionalRamads([]);
    setPsychologists([]);
    setDiagnostics([]);
    sortUsersByRole();
  }, [users]);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='simple table' dir='rtl'>
          <TableHead>
            <TableRow>
              {headlines.map((headline) => (
                <TableCell key={headline} align='center' className={classes.tableHeadLine}>
                  {headline}
                </TableCell>
              ))}
              <TableCell align='left' className={classes.tableHeadLine}>
                {t('actions.add')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roleObjects.map(({ roleToDisplay, role, list, setList }) => (
              <UnitDetailsTableRow
                roleToDisplay={roleToDisplay}
                role={role}
                users={list}
                setRoleUsers={setList}
                setUsers={setUsers}
                unit={unit}
                key={role}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UnitDetailsUsersTable;
