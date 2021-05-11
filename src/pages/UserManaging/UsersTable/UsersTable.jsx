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
import RowTable from '../TableRow/TableRow';

const UsersTable = ({ users, unit }) => {
  const { t } = useTranslation();
  const [interviewers, setInterviewers] = useState([]);
  const [unitRamadsItur, setUnitRamadsItur] = useState([]);
  const [unitRamadIturAssistants, setUnitRamadIturAssistants] = useState([]);
  const [professionalRamads, setProfessionalRamads] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const cells = [t('text.role'), t('text.amount'), t('text.permissions')];
  const rows = [
    { role: t('roles.interviewer'), list: interviewers },
    { role: t('roles.ramadIturOfUnit'), list: unitRamadsItur },
    { role: t('roles.ramadIturAssistant'), list: unitRamadIturAssistants },
    { role: t('roles.professionalRamad'), list: professionalRamads },
    { role: t('roles.psychologist'), list: psychologists },
    { role: t('roles.diagnoser'), list: diagnostics },
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
            {cells.map((cell) => (
              <TableCell align='center' className={classes.tableHeadLine}>
                {cell}
              </TableCell>
            ))}
            <TableCell align='right' className={classes.tableHeadLine}>
              {t('text.add')}
            </TableCell>
          </TableHead>
          <TableBody>
            {rows.map(({ role, list }) => (
              (
                <RowTable
                  role={role}
                  users={list}
                  unit={unit}
                />
              )
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
};

export default UsersTable;
