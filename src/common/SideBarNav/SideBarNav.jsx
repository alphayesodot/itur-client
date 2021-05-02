import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './SideBarNav.styles';
import settingsIcon from '../../utils/images/aside/settings.svg';
import settingsIconActive from '../../utils/images/aside/settings-active.svg';
import interviewIcon from '../../utils/images/aside/aside-interview-button.svg';
import interviewIconActive from '../../utils/images/aside/aside-interview-button-active.svg';
import luzIcon from '../../utils/images/aside/aside-luz-button.svg';
import luzIconActive from '../../utils/images/aside/aside-luz-button-active.svg';
import configApp from '../../appConf';
import UserStoreInstance from '../../stores/User.store';

const Sidebar = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [currentUrlPostfix, setCurrentUrlPostfix] = useState(window.location.pathname);
  const userRole = UserStoreInstance.userProfile.role;
  const iconDetails = {
    luz: { urlPostfix: configApp.sitesPostfixes.luz, imgDef: luzIcon, imgActive: luzIconActive, tooltip: t('sideBar.luz') },
    track: { urlPostfix: configApp.sitesPostfixes.track, imgDef: interviewIcon, imgActive: interviewIconActive, tooltip: t('sideBar.track') },
    malshabSchedule: { urlPostfix: configApp.sitesPostfixes.malshabSchedule, imgDef: luzIcon, imgActive: luzIconActive, tooltip: t('sideBar.malshabSchedule') },
    malshabSearch: { urlPostfix: configApp.sitesPostfixes.malshabSearch, imgDef: luzIcon, imgActive: luzIconActive, tooltip: t('sideBar.malshabSearch') },
    reports: { urlPostfix: configApp.sitesPostfixes.reports, imgDef: luzIcon, imgActive: luzIconActive, tooltip: t('sideBar.reports') },
    posh: { urlPostfix: configApp.sitesPostfixes.posh, imgDef: luzIcon, imgActive: luzIconActive, tooltip: t('sideBar.posh') },
    preparationKit: { urlPostfix: configApp.sitesPostfixes.preparationKit, imgDef: settingsIcon, imgActive: settingsIconActive, tooltip: t('sideBar.preparationKit') },
    nodeGroupCreation: { urlPostfix: configApp.sitesPostfixes.nodeGroupCreation, imgDef: settingsIcon, imgActive: settingsIconActive, tooltip: t('sideBar.nodeGroupCreation') },
    fileUpload: { urlPostfix: configApp.sitesPostfixes.fileUpload, imgDef: settingsIcon, imgActive: settingsIconActive, tooltip: t('sideBar.fileUpload') },
    userManagement: { urlPostfix: configApp.sitesPostfixes.userManagement, imgDef: settingsIcon, imgActive: settingsIconActive, tooltip: t('sideBar.userManagement') },
    editQuestionnaire: { urlPostfix: configApp.sitesPostfixes.editQuestionnaire, imgDef: settingsIcon, imgActive: settingsIconActive, tooltip: t('sideBar.editQuestionnaire') },
    settings: { urlPostfix: '/settings', imgDef: settingsIcon, imgActive: settingsIconActive, tooltip: 'settings' },
  };
  const createIcon = (iconDetailsObject) => {
    const src = iconDetailsObject.urlPostfix === currentUrlPostfix
      ? iconDetailsObject.imgActive : iconDetailsObject.imgDef;
    return (
      <Link
        key={iconDetailsObject.urlPostfix}
        className={classes.iconLink}
        to={iconDetailsObject.urlPostfix}
        onClick={() => { setCurrentUrlPostfix(iconDetailsObject.urlPostfix); }}
      >
        <Tooltip placement='top' title={`${iconDetailsObject.tooltip}`}>
          <img className={classes.icons} src={src} alt={iconDetailsObject.tooltip} />
        </Tooltip>
      </Link>
    );
  };

  const iconsToShow = Object.values(iconDetails).filter(
    (iconDetail) => configApp.allowedUrlPostfixesOfRole[userRole].some(
      (allowedUrl) => allowedUrl.route === iconDetail.urlPostfix && allowedUrl.sideBar,
    ),
  );

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.iconGroup}>
        {iconsToShow.map((iconDetail) => createIcon(iconDetail))}
      </div>
      {createIcon(iconDetails.settings)}
    </DashboardCard>
  );
};

export default Sidebar;
