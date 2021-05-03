/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import { AppBar, Container, Toolbar } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Highlights.styles';

const Highlights = () => {
  const classes = useStyles();
  const table = document.getElementById('table');

  return (
    <DashboardCard style={{ height: '5rem', marginTop: '2rem', backgroundColor: '#0f2231', direction: 'rtl', display: 'flex' }}>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', margin: '0 2rem 0 2rem' }}>
        <span style={{ color: '#FCB333', fontWeight: 500, marginLeft: '5rem' }}>נקודות ודגשים</span>
      </div>
    </DashboardCard>
  );
};

export default Highlights;
