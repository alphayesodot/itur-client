import {
  Table,
  TableCell,
  TableHead,
  Paper,
  TableContainer,
  TableBody,
  TableRow,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './RoleUsersTable.styles.js';

const RoleUsersTable = ({ users }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label='simple table' dir='rtl'>
        <TableHead>
          <TableRow>
            <TableCell align='center' className={classes.cell}>
              {t('title.userName')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell align='center' className={classes.mail}>{user.mail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoleUsersTable;
