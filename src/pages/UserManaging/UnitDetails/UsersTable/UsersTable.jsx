/* eslint-disable no-unused-vars */
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  TableBody,
  Button,
  TextField,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './UsersTable.styles';

const UsersTable = ({ users }) => {
  const [unitUsers, setUnitUsers] = useState([]);
  const [interviewers, setInterviewers] = useState([]);
  const [unitRamadsItur, setUnitRamadsItur] = useState([]);
  const [unitRamadIturAssistants, setUnitRamadIturAssistants] = useState([]);
  const [professionalRamads, setProfessionalRamads] = useState([]);
  const [madas, setMadas] = useState([]);
  const [iturs, setIturs] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const [technicals, setTechnicals] = useState([]);
  const { t } = useTranslation();
  const createData = (role, amount, permissions, add) => ({
    role,
    amount,
    permissions,
    add,
  });
  const [rows, setRows] = useState([
    createData(t('roles.interviewer'), 16, 'צפייה ', true),
    createData('רמד איתור', 2, 'עריכה ', true),
    createData('טכני', 1, 'צפייה / עריכה ', true),
    createData('רמד מקצועי', 0, 'עריכה ', true),
    createData('פסיכולוגי.ת', 2, 'צפייה', true),
    createData('פסיכולוגי.ת', 2, 'צפייה', true),
    // createData('פסיכולוגי.ת', 2, 'צפייה', true),
    // createData('פסיכולוגי.ת', 2, 'צפייה', true),
    // createData('פסיכולוגי.ת', 2, 'צפייה', true),
  ]);

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
        case 'MADA':
          setMadas([...madas, user]);
          break;
        case 'ITUR':
          setIturs([...iturs, user]);
          break;
        case 'PSYCHOLOGIST':
          setPsychologists([...psychologists, user]);
          break;
        case 'DIAGNOSER':
          setDiagnostics([...diagnostics, user]);
          break;
        case 'TECHNICAL':
          setTechnicals([...technicals, user]);
          break;
        default:
          console.log(user);
      }
    });
  };

  useEffect(async () => {
    sortUsersByRole();
  }, [users]);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='simple table' dir='rtl'>
          <TableHead>
            <TableCell align='center' className={classes.tableHeadLine}>{t('text.role')}</TableCell>
            <TableCell align='center' className={classes.tableHeadLine}>{t('text.amount')}</TableCell>
            <TableCell align='center' className={classes.tableHeadLine}>{t('text.permissions')}</TableCell>
            <TableCell align='right' className={classes.tableHeadLine}>{t('text.add')}</TableCell>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.role} className={classes.tableRow}>
                <TableCell align='center'>{row.role}</TableCell>
                <TableCell align='center'>{row.amount}</TableCell>
                <TableCell align='center'>
                  <Button className={classes.permissionsButton}>
                    {row.permissions}
                  </Button>
                </TableCell>
                <TableCell align='right'>
                  <div className={classes.addDiv}>
                    <IconButton className={classes.iconBotton}>
                      <AddIcon />
                    </IconButton>
                    <div>
                      <TextField inputProps={{ type: 'number' }} className={classes.numberOfRoleUsers} />
                      <Button variant='contained' className={classes.addUsersButton}>
                        {t('button.addUsers')}
                      </Button>
                    </div>
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersTable;
