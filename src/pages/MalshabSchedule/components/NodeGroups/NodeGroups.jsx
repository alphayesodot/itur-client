import { useTranslation } from 'react-i18next';
import NodeGroupCard from '../NodeGroupCard/NodeGroupCard';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './NodeGroups.styles';

const NodeGroups = ({ unitNodesGroups, setChoosenNodeGroup, selectedDate }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      {unitNodesGroups.length ? (
        <div className={classes.mainDiv}>
          {unitNodesGroups.map((nodeGroup) => (
            <NodeGroupCard
              nodeGroup={nodeGroup}
              selectedDate={selectedDate}
              key={nodeGroup.id}
              setChoosenNodeGroup={setChoosenNodeGroup}
            />
          ))}
        </div>
      ) : <div className={classes.noNodesGroups}>{t('text.noNodesGroups')}</div>}

    </DashboardCard>
  );
};

export default NodeGroups;
