import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import Calender from '../Calender/Calender';
import play from '../../../../utils/images/schedule/play-button.svg';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import EventService from '../../../../services/event.service';
import useStyles from './EventsSection.styles';

const getSortedEvents = (events) => events.sort(
  (first, second) => new Date(second.time).getTime() - new Date(first.time).getTime(),
);

const EventsSection = ({ malshabId }) => {
  const classes = useStyles();
  const history = useHistory();
  const [events, setEvents] = useState([]);
  const [showedEvents, setShowedEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    EventService.getEvents({ malshabId })
      .then((res) => {
        setEvents(getSortedEvents(res));
      })
      .catch(() => {
        toast(t('error.server'));
      });
  }, [malshabId]);

  useEffect(() => {
    if (showAll) setShowedEvents(events);
    else {
      setShowedEvents(
        events.filter(
          (event) => new Date(event.time).toDateString() === selectedDate.toDateString(),
        ),
      );
    }
  }, [events, selectedDate, showAll]);

  return (
    <div className={classes.root}>
      {events.length > 0 && (
        <div className={classes.calenderDiv}>
          <Calender
            events={events}
            selectedDate={selectedDate}
            setSelectedDate={(newDate) => {
              setSelectedDate(newDate);
              setShowAll(false);
            }}
          />
        </div>
      )}
      <div className={classes.mainDiv}>
        <div className={classes.sectionMenu}>
          <Typography className={classes.sectionTitle}>
            {t('title.interviewsHistory')}
          </Typography>
          <div className={classes.checkboxSection}>
            <Checkbox
              size='small'
              checked={showAll}
              onChange={() => setShowAll((oldShowAll) => !oldShowAll)}
              className={classes.checkbox}
              color='secondary'
            />
            <Typography className={classes.showAllText}>
              {t('button.showAll')}
            </Typography>
          </div>
        </div>
        <DashboardCard className={classes.card}>
          {showedEvents.length ? (
            showedEvents.map((event) => (
              <div key={event.id} className={classes.eventRow}>
                <Button
                  fullWidth
                  className={classes.button}
                  onClick={() => setSelectedDate(new Date(event.time))}
                >
                  <Typography>
                    {new Date(event.time).toLocaleDateString('en-GB')}
                    {'   '}
                    <strong>{event.node.name}</strong>
                  </Typography>
                  <Tooltip title={t('toolTip.playInterview')}>
                    {/* TODO: Send eventId as a prop to interview page */}
                    <IconButton
                      className={classes.iconButton}
                      onClick={() => history.push('/interview')}
                    >
                      <img
                        src={play}
                        alt='playInterview'
                        className={classes.iconButton}
                      />
                    </IconButton>
                  </Tooltip>
                </Button>
                <Divider className={classes.divider} />
              </div>
            ))
          ) : (
            <Typography className={classes.message}>
              {t('message.noEventsInDate')}
            </Typography>
          )}
        </DashboardCard>
      </div>
    </div>
  );
};

export default EventsSection;
