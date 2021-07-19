import React, { useMemo } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import configApp from '../../appConf';
import UserStoreInstance from '../../stores/User.store';

const PermissionCheck = () => {
  const userRole = UserStoreInstance.userProfile.role;
  const location = useLocation();

  const isAuthorized = useMemo(() => (configApp.allowedUrlPostfixesOfRole[userRole]?.some(
    (allowedUrl) => allowedUrl.route === location.pathname,
  )), [location.pathname]);

  const getHomePage = () => configApp.allowedUrlPostfixesOfRole[userRole].find(
    (allowedUrl) => allowedUrl.homePage,
  ).route;

  return isAuthorized ? <></> : <Redirect to={getHomePage()} />;
};

export default PermissionCheck;
