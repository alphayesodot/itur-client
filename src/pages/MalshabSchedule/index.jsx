/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useStyles from './index.styles';
import NodeGroups from './components/NodeGroups/NodeGroups';
import NodeGroupService from '../../services/nodeGroup.service';
import UsersCard from './components/UsersCard/UsersCard';
import Header from '../Track/components/Header/Header';
import MalshabimCard from './components/MalshabimCard/MalshabimCard';

const MalshabSchedulePage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [choosenNodeGroup, setChoosenNodeGroup] = useState('');
  const [unitNodesGroups, setUnitNodesGroups] = useState([]);
  const [unit, setUnit] = useState('יחידת במבינו');
  const [selectedNodeGroup, setSelectedNodeGroup] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }));

  useEffect(() => {
    NodeGroupService.getNodeGroups().then((res) => {
      setUnitNodesGroups(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  return (
    <div className={classes.root}>
      <Header
        unit={unit}
        selectedNodeGroup={selectedNodeGroup}
        setSelectedNodeGroup={setSelectedNodeGroup}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setIsLoading={setIsLoading}
      />
      {choosenNodeGroup ? (
        <div className={classes.mainInner}>
          <MalshabimCard />
          <UsersCard />
        </div>
      )
        : (
          <NodeGroups
            unitNodesGroups={unitNodesGroups}
            setChoosenNodeGroup={setChoosenNodeGroup}
          />
        )}
    </div>
  );
};

export default MalshabSchedulePage;
