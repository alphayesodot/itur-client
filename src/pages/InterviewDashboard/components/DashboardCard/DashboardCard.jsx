const DashboardCard = ({ backgroundColor, height, width, mt, children }) => (
  <div
    style={{
      backgroundColor: backgroundColor || '#fff',
      height: height || '100%',
      width: width || '100%',
      borderRadius: '15px',
      marginTop: mt,
    }}
  >
    {children}
  </div>
);

export default DashboardCard;
