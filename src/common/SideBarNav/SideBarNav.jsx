import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './SideBarNav.styles';
import settingsIcon from '../../utils/images/aside/settings.svg';
import interviewIcon from '../../utils/images/aside/aside-interview-button.svg';
import interviewIconActive from '../../utils/images/aside/aside-interview-button-active.svg';
import luzIcon from '../../utils/images/aside/aside-luz-button.svg';
import luzIconActive from '../../utils/images/aside/aside-luz-button-active.svg';
import configApp from '../../appConf';

const Sidebar = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const userRole = 'RAMAD_ITUR_OF_UNIT';
  const createIcon = (iconDetails) => {
    const src = iconDetails.urlPostfix === '/reports' ? iconDetails.imgActive : iconDetails.imgDef;
    return (
      <Link key={iconDetails.urlPostfix} className={classes.iconLink} to='/'>
        <Tooltip placement='top' title={t(`xmlPage.${iconDetails.tooltip}`)}>
          <img className={classes.icons} src={src} alt={iconDetails.tooltip} />
        </Tooltip>
      </Link>
    );
  };
  const iconsDetails = {
    schedule: { urlPostfix: configApp.sitesPostfixes.schedule, imgDef: luzIcon, imgActive: luzIconActive, tooltip: 'schedule' },
    track: { urlPostfix: configApp.sitesPostfixes.track, imgDef: interviewIcon, imgActive: interviewIconActive, tooltip: 'track' },
    malshabScheduling: { urlPostfix: configApp.sitesPostfixes.malshabSchedule, imgDef: luzIcon, imgActive: luzIconActive, tooltip: 'schedule' },
    searchMalshab: { urlPostfix: configApp.sitesPostfixes.malshbSearch, imgDef: luzIcon, imgActive: luzIconActive, tooltip: 'schedule' },
    reports: { urlPostfix: configApp.sitesPostfixes.reports, imgDef: luzIcon, imgActive: luzIconActive, tooltip: 'schedule' },
    posh: { urlPostfix: configApp.sitesPostfixes.posh, imgDef: luzIcon, imgActive: luzIconActive, tooltip: 'posh' },
  };
  const iconsToShow = Object.values(iconsDetails).filter(
    (iconDetail) => configApp.allowedUrlPostfixesOfRole[userRole].includes(iconDetail.urlPostfix),
  );
  return (
    <DashboardCard className={classes.root}>
      <div className={classes.iconGroup}>
        {iconsToShow.map((iconDetail) => createIcon(iconDetail))}
      </div>
      <Link className={classes.iconLink} to='/'>
        <img className={classes.icons} src={settingsIcon} alt='settings' />
      </Link>
    </DashboardCard>
  );
};

export default Sidebar;
