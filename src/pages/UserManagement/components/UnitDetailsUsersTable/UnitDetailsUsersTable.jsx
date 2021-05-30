import {
  Table,
  TableCell,
  TableHead,
  Paper,
  TableContainer,
  TableBody,
} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './UnitDetailsUsersTable.styles';
import UnitDetailsTableRow from '../UnitDetailsTableRow/UnitDetailsTableRow';

const UnitDetailsUsersTable = ({ users, setUsers, unit }) => {
  const { t } = useTranslation();
  const [interviewers, setInterviewers] = useState([]);
  const [unitRamadsItur, setUnitRamadsItur] = useState([]);
  const [unitRamadIturAssistants, setUnitRamadIturAssistants] = useState([]);
  const [professionalRamads, setProfessionalRamads] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const headlines = [t('title.role'), t('title.amount'), t('title.permissions')];
  const roleObjects = [
    {
      roleToDisplay: t('roles.interviewer'),
      role: 'INTERVIEWER',
      list: interviewers,
      setList: setInterviewers,
    },
    {
      roleToDisplay: t('roles.ramadIturOfUnit'),
      role: 'RAMAD_ITUR_OF_UNIT',
      list: unitRamadsItur,
      setList: setUnitRamadsItur,
    },
    {
      roleToDisplay: t('roles.ramadIturAssistant'),
      role: 'RAMAD_ITUR_ASSISTANT',
      list: unitRamadIturAssistants,
      setList: setUnitRamadIturAssistants,
    },
    {
      roleToDisplay: t('roles.professionalRamad'),
      role: 'PROFESSIONAL_RAMAD',
      list: professionalRamads,
      setList: setProfessionalRamads,
    },
    {
      roleToDisplay: t('roles.psychologist'),
      role: 'PSYCHOLOGIST',
      list: psychologists,
      setList: setPsychologists,
    },
    {
      roleToDisplay: t('roles.diagnoser'),
      role: 'DIAGNOSER',
      list: diagnostics,
      setList: setDiagnostics,
    },
  ];

  const classes = useStyles();
  const sortUsersByRole = () => {
    users.forEach((user) => {
      switch (user.role) {
        case 'INTERVIEWER':
          setInterviewers((prevValue) => [...prevValue, user]);
          break;
        case 'RAMAD_ITUR_OF_UNIT':
          setUnitRamadsItur((prevValue) => [...prevValue, user]);
          break;
        case 'RAMAD_ITUR_ASSISTANT':
          setUnitRamadIturAssistants((prevValue) => [...prevValue, user]);
          break;
        case 'PROFESSIONAL_RAMAD':
          setProfessionalRamads((prevValue) => [...prevValue, user]);
          break;
        case 'PSYCHOLOGIST':
          setPsychologists((prevValue) => [...prevValue, user]);
          break;
        case 'DIAGNOSER':
          setDiagnostics((prevValue) => [...prevValue, user]);
          break;
        default:
      }
    });
  };

  useEffect(() => {
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
            {headlines.map((headline) => (
              <TableCell align='center' className={classes.tableHeadLine}>
                {headline}
              </TableCell>
            ))}
            <TableCell align='left' className={classes.tableHeadLine}>
              {t('title.add')}
            </TableCell>
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
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UnitDetailsUsersTable;
