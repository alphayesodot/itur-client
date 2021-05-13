import { Button, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './MalshabToolbar.styles';
import RecordCircle from './RecordCircle/RecordCircle';
import interviewDurationStrFormat from './interviewFormat.util';

const MalshabToolbar = ({ event, recording }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const tagStr = '//';
  const tag = <b className={classes.marginL}>{tagStr}</b>;
  const formattedInterviewTime = interviewDurationStrFormat(event?.time);
  const malshabFullName = `${event.malshab.firstName} ${event.malshab.lastName}`;

  return (
    <Toolbar className={classes.toolbar}>
      <div className={classes.toolbarContainer}>
        <b className={classes.marginL}>{t('interviewDashboard.malshab.fullName')}</b>
        <span className={classes.marginL}>{malshabFullName}</span>
        {tag}
        <b className={classes.marginL}>{t('interviewDashboard.malshab.interviewTime')}</b>
        <span className={classes.marginL}>{formattedInterviewTime}</span>
        {recording && (
          <>
            {tag}
            <b className={classes.marginLSmall}>{t('interviewDashboard.malshab.recording')}</b>
            <RecordCircle />
          </>
        )}
      </div>
      <div>
        <Button
          classes={{
            root: classes.interviewScheduleBtn,
            label: classes.label,
          }}
        >
          {t('interviewDashboard.malshab.finishInterview')}
        </Button>
      </div>
    </Toolbar>
  );
};

export default MalshabToolbar;
