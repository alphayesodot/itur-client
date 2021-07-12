import React, { useMemo } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import configApp from '../../appConf';
import UserStoreInstance from '../../stores/User.store';

const PermissionCheck = () => {
  const userRole = UserStoreInstance.userProfile.role;

  const isAuthorized = useMemo(() => (
    configApp.allowedUrlPostfixesOfRole[userRole]?.some(
      (allowedUrl) => allowedUrl.route === window.location.pathname,
    )
  ), [window.location.pathname]);

  const getHomePage = () => (
    configApp.allowedUrlPostfixesOfRole[userRole].find(
      (allowedUrl) => allowedUrl.homePage,
    ).route
  );

  return (
    isAuthorized ? <></> : <Redirect to={getHomePage()} />
  );
};

export default withRouter(PermissionCheck);
