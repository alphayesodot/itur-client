import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Zoom, Checkbox } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './NodesDashboard.styles';

const NodesDashboard = ({ allNodes, checkedNodes, updateCheckedNodes }) => {
  const classes = useStyles();

  return (
    <DashboardCard className={classes.root}>
      <FormGroup row className={classes.internalNodeContainer}>
        {allNodes?.map((node) => (
          <Tooltip
            key={node.id}
            placement='top-end'
            title={node.name}
            TransitionComponent={Zoom}
            enterDelay={300}
          >
            <FormControlLabel
              classes={{ root: classes.checkboxContainer }}
              control={(
                <Checkbox
                  checked={checkedNodes.includes(node.id)}
                  onChange={() => { updateCheckedNodes(node.id); }}
                />
              )}
              label={node.name}
            />
          </Tooltip>
        )) }
      </FormGroup>
    </DashboardCard>
  );
};

export default NodesDashboard;
