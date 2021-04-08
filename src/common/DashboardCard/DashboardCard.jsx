const DashboardCard = ({ backgroundColor, height, width, mt, ml, children }) => (
  <div
    style={{
      backgroundColor: backgroundColor || '#fff',
      height: height || '100%',
      width: width || '100%',
      borderRadius: '15px',
      marginTop: mt,
      marginLeft: ml,
    }}
  >
    {children}
  </div>
);

export default DashboardCard;
