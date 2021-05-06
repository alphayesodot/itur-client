/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
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
import useStyles from './UsersTable.styles';
import RowTable from './TableRow/TableRow';

const UsersTable = ({ users }) => {
  const [unitUsers, setUnitUsers] = useState([]);
  const [interviewers, setInterviewers] = useState([]);
  const [unitRamadsItur, setUnitRamadsItur] = useState([]);
  const [unitRamadIturAssistants, setUnitRamadIturAssistants] = useState([]);
  const [professionalRamads, setProfessionalRamads] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const { t } = useTranslation();
  const cells = [t('text.role'), t('text.amount'), t('text.permissions')];
  const rows = [
    { role: t('roles.interviewer'), amount: interviewers.length },
    { role: t('roles.ramadIturOfUnit'), amount: unitRamadsItur.length },
    { role: t('roles.ramadIturAssistant'), amount: unitRamadIturAssistants.length },
    { role: t('roles.professionalRamad'), amount: professionalRamads.length },
    { role: t('roles.psychologist'), amount: psychologists.length },
    { role: t('roles.diagnoser'), amount: interviewers.length },
  ];

  const classes = useStyles();
  const sortUsersByRole = () => {
    unitUsers.forEach((user) => {
      switch (user.role) {
        case 'INTERVIWER':
          setInterviewers([...interviewers, user]);
          break;
        case 'RAMAD_ITUR_OF_UNIT':
          setUnitRamadsItur([...unitRamadsItur, user]);
          break;
        case 'RAMAD_ITUR_ASSISTANT':
          setUnitRamadIturAssistants([...unitRamadIturAssistants, user]);
          break;
        case 'PROFESSIONAL_RAMAD':
          setProfessionalRamads([...professionalRamads, user]);
          break;
        case 'PSYCHOLOGIST':
          setPsychologists([...psychologists, user]);
          break;
        case 'DIAGNOSER':
          setDiagnostics([...diagnostics, user]);
          break;
        default:
          console.log(user);
      }
    });
  };
  useEffect(async () => {
    setUnitUsers(users);
  }, [users]);

  // useEffect(async () => { TODO: remove comments
  //   sortUsersByRole();
  // }, [unitUsers]);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='simple table' dir='rtl'>
          <TableHead>
            {cells.map((cell) => <TableCell align='center' className={classes.tableHeadLine}>{cell}</TableCell>)}

            <TableCell align='right' className={classes.tableHeadLine}>{t('text.add')}</TableCell>
          </TableHead>
          <TableBody>
            {rows.map((row) => <RowTable role={row.role} amount={row.amount} />) }

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersTable;
