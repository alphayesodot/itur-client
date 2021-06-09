import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './NodeGroupCard.styles';
import POSITIVE from '../../../../utils/images/schedule/passed-positive.svg';
import WARNING from '../../../../utils/images/schedule/warning.svg';
import EventService from '../../../../services/event.service.js';
import NodeService from '../../../../services/node.service.js';

const NodeGroupCard = ({ nodeGroup, setChoosenNodeGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [nodeGroupEvents, setNodeGroupEvents] = useState([]);
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    setNodeGroupEvents([]);
    NodeService.getNodes({ nodeGroupId: nodeGroup.id }).then((nodes) => {
      nodes.forEach((node) => {
        EventService.getEvents({ nodeId: node.id }).then((events) => {
          setNodeGroupEvents((prevValue) => [...prevValue, ...events]);
        }).catch(() => {
          toast(t('error.server'));
        });
      });
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  useEffect(() => {
    setScheduledEvents([]);
    nodeGroupEvents.forEach((event) => {
      if (event.interviewersIds.length > 0) {
        setScheduledEvents((prevValue) => [...prevValue, event]);
      }
    });
  }, [nodeGroupEvents]);

  return (
    <DashboardCard
      onClick={() => { setChoosenNodeGroup(nodeGroup.id); }}
      className={
        scheduledEvents.length === nodeGroupEvents.length
          ? classes.positiveRoot
          : classes.negativeRoot
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
      <img src={scheduledEvents.length === nodeGroupEvents.length ? `${POSITIVE}` : `${WARNING}`} alt='' className={classes.iconImg} />
    </DashboardCard>
  );
};

export default NodeGroupCard;
