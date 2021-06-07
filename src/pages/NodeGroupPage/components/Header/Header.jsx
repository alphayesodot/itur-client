import React from 'react';
import { Button, Input, Typography } from '@material-ui/core';
// import NodeGroupSelect from '../../../../common/NodeGroupSelect/NodeGroupSelect';
import { useTranslation } from 'react-i18next';
import searchImg from '../../../../utils/images/general/search-yellow.svg';
// import { toast } from 'react-toastify';
// import { Typography } from '@material-ui/core';
// import { observer } from 'mobx-react-lite';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';
// import NodeGroupSelect from '../../../../common/NodeGroupSelect/NodeGroupSelect';

// const Header = observer(({
const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  // const [selectedNodeGroup, setSelectedNodeGroup] = useState('');
  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <div className={classes.main}>
          <Button className={`${classes.newNodeGroupButton} ${classes.item}`}>
            {t('button.newNodeGroup')}
          </Button>
          <div>
            <Button className={classes.tangparent}>
              <img src={searchImg} className={classes.searchImg} alt='search' />
            </Button>
            <Input className={classes.input} />
          </div>
          <Typography className={`${classes.unit} ${classes.item}`}>
            :
            <strong>{t('headerTitles.searchNodeGroup')}</strong>
          </Typography>
        </div>
      </div>
    </DashboardCard>
  );
};

export default Header;
