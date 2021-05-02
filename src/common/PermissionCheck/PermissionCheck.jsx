import React from 'react';
import { Redirect } from 'react-router-dom';
import configApp from '../../appConf';
import UserStoreInstance from '../../stores/User.store';

const PermissionCheck = ({ route }) => {
  const userRole = UserStoreInstance.userProfile.role;
  const isAuthorized = () => (
    configApp.allowedUrlPostfixesOfRole[userRole].some((allowedUrl) => allowedUrl.route === route)
  );

  return (
    isAuthorized() ? <></> : <Redirect to='/' />
  );
};

export default PermissionCheck;
