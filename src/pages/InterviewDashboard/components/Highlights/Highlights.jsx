/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import { AppBar, Container, Toolbar } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Highlights.styles';

const Highlights = () => {
  const classes = useStyles();
  const table = document.getElementById('table');
  const scrollRight = () => {
    table.scrollLeft = '30px';
  };

  return (
    <DashboardCard style={{ height: '5rem', marginTop: '2rem', backgroundColor: '#0f2231', direction: 'rtl', display: 'flex' }}>
      <div style={{ margin: '1.75rem 1.5rem 1.75rem 1rem', display: 'flex' }}>
        <span style={{ color: '#FCB333', fontWeight: 500, marginLeft: '4rem', minWidth: '6rem' }}>נקודות ודגשים</span>
        <div style={{ maxWidth: '55rem', height: '2.5rem' }} className={classes.list}>
          <div style={{ display: 'flex' }} className={classes.data}>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
            <span style={{ color: '#FCB333', fontWeight: 500, margin: '0 1.5rem  0 1.5rem', minWidth: '6rem' }}>נקודות ודגשים</span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default Highlights;
