import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './SideBarNav.styles';
import trackIcon from '../../utils/images/aside/aside-track-button.svg';
import trackIconActive from '../../utils/images/aside/aside-track-button-active.svg';
import settingsIcon from '../../utils/images/aside/aside-settings-button.svg';
import settingsIconActive from '../../utils/images/aside/aside-settings-button-active.svg';
import preparationKitIcon from '../../utils/images/aside/aside-preparation-kit-button.svg';
import preparationKitIconActive from '../../utils/images/aside/aside-preparation-kit-button-active.svg';
import nodeGroupIcon from '../../utils/images/aside/aside-node-group-button.svg';
import nodeGroupIconActive from '../../utils/images/aside/aside-node-group-button-active.svg';
import questionnairesIcon from '../../utils/images/aside/aside-questionnaires-button.svg';
import questionnairesIconActive from '../../utils/images/aside/aside-questionnaires-button-active.svg';
import userManagementIcon from '../../utils/images/aside/aside-user-management-button.svg';
import userManagementIconActive from '../../utils/images/aside/aside-user-management-button-active.svg';
import reportsIcon from '../../utils/images/aside/aside-reports-button.svg';
import reportsIconActive from '../../utils/images/aside/aside-reports-button-active.svg';
import poshIcon from '../../utils/images/aside/aside-posh-button.svg';
import poshIconActive from '../../utils/images/aside/aside-posh-button-active.svg';
import luzIcon from '../../utils/images/aside/aside-luz-button.svg';
import luzIconActive from '../../utils/images/aside/aside-luz-button-active.svg';
import configApp from '../../appConf';
import UserStoreInstance from '../../stores/User.store';

const Sidebar = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [iconsToShow, setIconsToShow] = useState([]);
  const userRole = UserStoreInstance.userProfile.role;
  const iconDetails = {
    luz: { urlPostfix: configApp.sitesPostfixes.luz, imgDef: luzIcon, imgActive: luzIconActive, title: t('sideBar.luz') },
    track: { urlPostfix: configApp.sitesPostfixes.track, imgDef: trackIcon, imgActive: trackIconActive, title: t('sideBar.track') },
    malshabSchedule: { urlPostfix: configApp.sitesPostfixes.malshabSchedule, imgDef: luzIcon, imgActive: luzIconActive, title: t('sideBar.malshabSchedule') },
    malshabSearch: { urlPostfix: configApp.sitesPostfixes.malshabSearch, imgDef: luzIcon, imgActive: luzIconActive, title: t('sideBar.malshabSearch') },
    reports: { urlPostfix: configApp.sitesPostfixes.reports, imgDef: reportsIcon, imgActive: reportsIconActive, title: t('sideBar.reports') },
    posh: { urlPostfix: configApp.sitesPostfixes.posh, imgDef: poshIcon, imgActive: poshIconActive, title: t('sideBar.posh') },
    preparationKit: { urlPostfix: configApp.sitesPostfixes.preparationKit, imgDef: preparationKitIcon, imgActive: preparationKitIconActive, title: t('sideBar.preparationKit') },
    nodeGroupCreation: { urlPostfix: configApp.sitesPostfixes.nodeGroupCreation, imgDef: nodeGroupIcon, imgActive: nodeGroupIconActive, title: t('sideBar.nodeGroupCreation') },
    fileUpload: { urlPostfix: configApp.sitesPostfixes.fileUpload, imgDef: settingsIcon, imgActive: settingsIconActive, title: t('sideBar.fileUpload') },
    userManagement: { urlPostfix: configApp.sitesPostfixes.userManagement, imgDef: userManagementIcon, imgActive: userManagementIconActive, title: t('sideBar.userManagement') },
    editQuestionnaire: { urlPostfix: configApp.sitesPostfixes.editQuestionnaire, imgDef: questionnairesIcon, imgActive: questionnairesIconActive, title: t('sideBar.editQuestionnaire') },
    settings: { urlPostfix: '/settings', imgDef: settingsIcon, imgActive: settingsIconActive, title: t('sideBar.settings') },
  };
  const createIcon = (iconDetailsObject) => {
    const src = iconDetailsObject.urlPostfix === window.location.pathname
      ? iconDetailsObject.imgActive : iconDetailsObject.imgDef;
    return (
      <div className={classes.icon} key={iconDetailsObject.urlPostfix}>
        <Link
          className={classes.iconLink}
          to={iconDetailsObject.urlPostfix}
        >
          <Tooltip placement='top' title={`${iconDetailsObject.title}`}>
            <img className={classes.iconImg} src={src} alt={iconDetailsObject.title} />
          </Tooltip>
        </Link>
        <Typography className={classes.iconTitle}>{iconDetailsObject.title}</Typography>
      </div>
    );
  };

  useEffect(() => {
    setIconsToShow(Object.values(iconDetails).filter(
      (iconDetail) => configApp.allowedUrlPostfixesOfRole[userRole]?.some(
        (allowedUrl) => allowedUrl.route === iconDetail.urlPostfix && allowedUrl.sideBar,
      ),
    ));
  }, [window.location.pathname]);

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.iconGroup}>
        {iconsToShow.map((iconDetail) => createIcon(iconDetail))}
      </div>
      {createIcon(iconDetails.settings)}
    </DashboardCard>
  );
};

export default withRouter(Sidebar);
