import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/index';
import Sidebar from './common/SideBarNav/SideBarNav';
import AuthService from './services/auth.service';
import UploadXmlPage from './pages/XmlUpload/index';
import ConfigService from './services/config.service';
import Header from './common/Header/Header';
import useStyles from './App.styles';
import logo from './utils/images/logo.svg';
import UserStoreInstance from './stores/User.store';
import configApp from './appConf';
import 'react-toastify/dist/ReactToastify.css';
import PermissionCheck from './common/PermissionCheck/PermissionCheck';

const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initAuthUser = useCallback(() => {
    AuthService.getAuthUser()
      .then((res) => {
        if (res) {
          UserStoreInstance.setUserProfile(res);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => setIsAuthenticated(false))
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, []);

  useEffect(() => {
    ConfigService.setConfigVariables().then(() => {
      if (!isAuthenticated) {
        initAuthUser();
      }
    });
  }, [initAuthUser]);

  const renderUnauthorized = () => <span>unauthorized</span>;

  const renderLoading = () => (
    <div className={classes.loading}>
      <img className={classes.logo} src={logo} alt='radar logo' />
    </div>
  );

  const renderApp = () => (isAuthenticated ? (
    <Router classes={classes.root}>
      <Header />
      <div className={classes.bodyContainer}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path={configApp.sitesPostfixes.fileUpload}>
            <UploadXmlPage />
            <PermissionCheck route={configApp.sitesPostfixes.fileUpload} />
          </Route>
        </Switch>
        <Sidebar />
      </div>
      <ToastContainer />
    </Router>
  ) : (
    renderUnauthorized()
  ));

  return isLoading ? renderLoading() : renderApp();
};

export default App;
