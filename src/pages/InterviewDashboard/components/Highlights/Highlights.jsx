import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Highlights.styles';

const Highlights = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const highlightsTexts = [
    t('interviewDashboard.highlightsTexts.routeMotivation'),
    t('interviewDashboard.highlightsTexts.personalConnection'),
    t('interviewDashboard.highlightsTexts.seriousness'),
    t('interviewDashboard.highlightsTexts.respectfulBehaviorForAuthority'),
    t('interviewDashboard.highlightsTexts.calmUnderPressure'),
  ];

  return (
    <DashboardCard className={classes.dashboardCard}>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', margin: '0 2rem 0 2rem' }}>
        <span style={{ color: '#FCB333', fontWeight: 500, minWeight: '6rem', fontSize: '1.2rem' }}>נקודות ודגשים</span>
      </div>
      <div style={{ display: 'flex', marginRight: '4rem', overflowX: 'auto' }}>
        {highlightsTexts.map((highlight) => (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              // marginRight: '3rem',
              minWidth: '13rem',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1rem', color: '#FCB333', fontWeight: 500 }}>{highlight}</span>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default Highlights;
