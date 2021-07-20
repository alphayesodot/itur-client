import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';
import NodeGroupCard from '../NodeGroupCard/NodeGroupCard';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';
import NodeGroupService from '../../../../services/nodeGroup.service.js';
import useStyles from './NodeGroups.styles';

const NodeGroups = observer(() => {
  const classes = useStyles();
  const [unitNodesGroups, setUnitNodesGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsLoading(true);
    NodeGroupService.getNodeGroups()
      .then((res) => {
        setUnitNodesGroups(res);
      })
      .catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <DashboardCard className={classes.root}>
      { isLoading ? <CircularProgress color='primary' />
        : (
          <div className={classes.mainDiv}>
            {unitNodesGroups.length ? (
              <>
                {unitNodesGroups.map((nodeGroup) => (
                  <NodeGroupCard
                    nodeGroup={nodeGroup}
                    key={nodeGroup.id}
                  />
                ))}
              </>
            ) : <NoObjectsToShow title={t('text.noNodesGroups')} />}
          </div>
        )}
    </DashboardCard>
  );
});

export default NodeGroups;
