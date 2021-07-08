import { Button, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './MalshabToolbar.styles';
import RecordCircle from './RecordCircle/RecordCircle';
import interviewDurationStrFormat from './interviewFormat.util';

const MalshabToolbar = ({ event, recording, finishInterview }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const tagStr = '//';
  const tag = <b className={classes.marginL}>{tagStr}</b>;
  const formattedInterviewTime = interviewDurationStrFormat(event?.time);
  const malshabFullName = `${event.malshabShort.firstName} ${event.malshabShort.lastName}`;

  return (
    <Toolbar className={classes.toolbar}>
      <div>
        <Button
          classes={{
            root: classes.interviewScheduleBtn,
            label: classes.label,
          }}
          onClick={finishInterview}
        >
          {t('interviewDashboard.finishInterview')}
        </Button>
      </div>
      <div className={classes.toolbarContainer}>
        {recording && (
          <>
            <RecordCircle />
            <b className={classes.marginLSmall}>{t('interviewDashboard.recording')}</b>
            {tag}
          </>
        )}
        <span className={classes.marginL}>{formattedInterviewTime}</span>
        <b className={classes.marginL}>{t('interviewDashboard.interviewTime')}</b>
        {tag}
        <span className={classes.marginL}>{malshabFullName}</span>
        <b className={classes.marginL}>{t('malshabInfo.fullName')}</b>
      </div>
    </Toolbar>
  );
};

export default MalshabToolbar;
