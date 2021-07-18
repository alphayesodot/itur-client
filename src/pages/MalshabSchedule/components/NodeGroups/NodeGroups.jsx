import { useTranslation } from 'react-i18next';
import NodeGroupCard from '../NodeGroupCard/NodeGroupCard';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';
import useStyles from './NodeGroups.styles';

const NodeGroups = ({ unitNodesGroups, setChoosenNodeGroup, selectedDate }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.mainDiv}>
        {unitNodesGroups.length ? (
          <>
            {unitNodesGroups.map((nodeGroup) => (
              <NodeGroupCard
                nodeGroup={nodeGroup}
                selectedDate={selectedDate}
                key={nodeGroup.id}
                setChoosenNodeGroup={setChoosenNodeGroup}
              />
            ))}
          </>
        ) : <NoObjectsToShow title={t('text.noNodesGroups')} />}
      </div>
    </DashboardCard>
  );
};

export default NodeGroups;
