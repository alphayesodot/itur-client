import NodeGroupCard from '../NodeGroupCard/NodeGroupCard';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './NodeGroups.styles';

const NodeGroups = ({ unitNodesGroups, setChoosenNodeGroup }) => {
  const classes = useStyles();
  return (
    <DashboardCard className={classes.root}>
      {unitNodesGroups.length >= 1 ? (
        <div className={classes.mainDiv}>
          {unitNodesGroups.map((nodeGroup) => (
            <NodeGroupCard nodeGroup={nodeGroup} />
          ))}
        </div>
      ) : <div>אין מסלולים</div>}

    </DashboardCard>
  );
};

export default NodeGroups;
