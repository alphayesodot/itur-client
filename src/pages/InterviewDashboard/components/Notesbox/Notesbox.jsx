import { Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles, { StyledTextField } from './Notesbox.styles';

const Notesbox = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <DashboardCard className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          <p>{t('interviewDashboard.notesBox.dontForgetNotesForMyself')}</p>
        </div>
      </Toolbar>
      <DashboardCard>
        <StyledTextField
          InputProps={{ disableUnderline: true }}
          multiline
          rows={5}
          fullWidth
          placeholder={t('interviewDashboard.notesBox.hereYouCanWriteSomeNotes')}
          className={classes.rtl}
        />
      </DashboardCard>
    </DashboardCard>
  );
};

export default Notesbox;
