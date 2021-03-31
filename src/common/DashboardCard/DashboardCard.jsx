// import useStyles from './DashboardCard.styles';

const DashboardCard = ({ backgroundColor, height, width, mt }) => (
  <div
    style={{
      backgroundColor: backgroundColor || '#fff',
      height: height || '100%',
      width: width || '100%',
      borderRadius: '15px',
      marginTop: mt,
    }}
  />
);

export default DashboardCard;
