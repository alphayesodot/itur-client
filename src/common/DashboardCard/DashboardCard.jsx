import theme from '../../theme';

const DashboardCard = ({ backgroundColor, height, width, mt, justifyContent, padding, alignItems, children }) => (
  <div
    style={{
      backgroundColor: (() => {
        if (backgroundColor === 'primary') return theme.palette.primary.main;
        if (backgroundColor === 'secondary') return theme.palette.primary.secondary;
        return '#fff';
      })(),
      height: height || '100%',
      width,
      borderRadius: '15px',
      marginTop: mt,
      display: 'grid',
      padding,
      justifyContent,
      alignItems,
    }}
  >
    {children}
  </div>
);

export default DashboardCard;
