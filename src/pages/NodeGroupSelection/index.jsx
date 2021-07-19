import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import ScheduleHeader from '../../common/ScheduleHeader/ScheduleHeader';
import NodeGroups from './components/NodeGroups/NodeGroups';
import MalshabScheduleStore from '../../stores/MalshabSchedule.store.js';
import configApp from '../../appConf.js';
import useStyles from './index.styles';

const NodeGroupsSelection = observer(() => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <ScheduleHeader
        selectedNodeGroup={MalshabScheduleStore.selectedNodeGroup}
        setSelectedNodeGroup={(value) => {
          MalshabScheduleStore.setSelectedNodeGroup(value);
          history.push(configApp.sitesPostfixes.malshabSchedule);
        }}
        selectedDate={MalshabScheduleStore.selectedDate}
        setSelectedDate={(value) => MalshabScheduleStore.setSelectedDate(value)}
      />
      <NodeGroups />
    </div>
  );
});

export default NodeGroupsSelection;
