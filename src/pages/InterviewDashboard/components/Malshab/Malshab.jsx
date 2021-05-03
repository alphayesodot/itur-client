import { Button, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Malshab.styles';
import RecordCircle from './RecordCircle/RecordCircle';

const Malshab = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const tagStr = '//';
  const tag = <b style={{ marginLeft: '0.8rem' }}>{tagStr}</b>;

  return (
    <DashboardCard className={classes.root}>
      <Toolbar style={{ direction: 'rtl', height: '5rem', justifyContent: 'space-between', padding: '0 3rem' }}>
        <div style={{ display: 'inline-flex' }}>
          <b style={{ marginLeft: '0.8rem' }}>שם מלא</b>
          <span style={{ fontWeight: '300', marginLeft: '0.8rem' }}>ברי צקלה</span>
          {tag}
          <b style={{ marginLeft: '0.8rem' }}>זמן ראיון</b>
          <span style={{ fontWeight: '300', marginLeft: '0.8rem' }}>09:00 - 09:30</span>
          {tag}
          <b style={{ marginLeft: '0.2rem' }}>בהקלטה</b>
          <RecordCircle />
        </div>
        <div>
          <Button
            classes={{
              root: classes.interviewScheduleBtn,
              label: classes.label,
            }}
          >
            {t('interviewDashboard.questionnaire.expandedQuestionnaire')}
          </Button>
        </div>
      </Toolbar>
    </DashboardCard>
  );
};

export default Malshab;
