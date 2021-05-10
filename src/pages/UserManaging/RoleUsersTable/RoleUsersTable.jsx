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
          <TableCell align='center' className={classes.cell}>
            {t('text.userName')}
          </TableCell>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell align='center'>{user.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoleUsersTable;
