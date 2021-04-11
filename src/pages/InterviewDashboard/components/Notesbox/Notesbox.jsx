import { Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Notesbox.styles';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-inputMultiline': {
    fontSize: '0.8rem',
  },
});

const Notesbox = () => {
  const classes = useStyles();
  return (
    <DashboardCard
      backgroundColor='secondary'
      height='12rem'
      mt='2rem'
      padding='0px 1rem 1rem 1rem'
    >
      <Toolbar
        style={{
          display: 'flex',
          direction: 'rtl',
          padding: 0,
        }}
      >
        <div>
          <p>לא לשכוח // הערות לעצמי בזמן הראיון</p>
        </div>
      </Toolbar>
      <DashboardCard style={{ padding: '1rem' }}>
        <StyledTextField
          InputProps={{ disableUnderline: true }}
          multiline
          rows={5}
          fullWidth
          placeholder='פה אפשר לכתוב כל מיני הערות...'
          style={{
            direction: 'rtl',
          }}
        />
      </DashboardCard>
    </DashboardCard>
  );
};

export default Notesbox;
