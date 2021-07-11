import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  TableContainer,
  TableBody,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './NewUsersTable.styles.js';

const NewUsersTable = ({ users }) => {
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
            <TableCell align='center' className={classes.cell}>
              {t('title.password')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className={classes.mail} align='center'>{user.mail}</TableCell>
              <TableCell align='center'>{user.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewUsersTable;
