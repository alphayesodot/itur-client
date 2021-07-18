import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import MalshabScheduleStore from '../../../../stores/MalshabSchedule.store.js';
import useStyles from './NodeGroupCard.styles';
import configApp from '../../../../appConf.js';
import POSITIVE from '../../../../utils/images/schedule/passed-positive.svg';
import WARNING from '../../../../utils/images/schedule/warning.svg';
import EventService from '../../../../services/event.service.js';
import NodeService from '../../../../services/node.service.js';

const NodeGroupCard = observer(({ nodeGroup }) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const [nodeGroupEvents, setNodeGroupEvents] = useState([]);
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    setNodeGroupEvents([]);
    NodeService.getNodes({ nodeGroupId: nodeGroup.id }).then((nodes) => {
      nodes.forEach((node) => {
        EventService.getEvents({
          nodeId: node.id,
          date: MalshabScheduleStore.selectedDate,
        }).then((events) => {
          setNodeGroupEvents((prevValue) => [...prevValue, ...events]);
        }).catch(() => {
          toast(t('error.server'));
        });
      });
    }).catch(() => {
      toast(t('error.server'));
    });
  }, [nodeGroup, MalshabScheduleStore.selectedDate]);

  useEffect(() => {
    setScheduledEvents([]);
    nodeGroupEvents.forEach((event) => {
      if (event.interviewersIds.length) {
        setScheduledEvents((prevValue) => [...prevValue, event]);
      }
    });
  }, [nodeGroupEvents]);

  return (
    <DashboardCard
      onClick={() => {
        MalshabScheduleStore.setSelectedNodeGroup(nodeGroup);
        history.push(configApp.sitesPostfixes.malshabSchedule);
      }}
      className={
        `${classes.root} 
        ${scheduledEvents.length === nodeGroupEvents.length
          ? classes.positive
          : classes.negative}`
      }
    >
      <Typography className={classes.nodeGroupTitle}>
        <strong>
          {t('title.nodeGroup')}
          :
          {' '}
        </strong>
        {nodeGroup.name}
      </Typography>
      <Typography className={classes.malshabs}>
        <strong>{t('text.malshabsToSchedule')}</strong>
      </Typography>
      <Typography className={classes.malshabs}>
        <strong>{`${scheduledEvents.length}/${nodeGroupEvents.length}`}</strong>
      </Typography>
      <img
        src={scheduledEvents.length === nodeGroupEvents.length
          ? `${POSITIVE}`
          : `${WARNING}`}
        alt='status'
        className={classes.iconImg}
      />
    </DashboardCard>
  );
});

export default NodeGroupCard;
