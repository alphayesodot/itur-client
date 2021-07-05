import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/index';
import Track from './pages/Track/index';
import NodeGroupPage from './pages/NodeGroupPage/index';
import Luz from './pages/Luz/index';
import AuthService from './services/auth.service';
import UploadPage from './pages/FileUpload/index';
import Report from './pages/Reports/index';
import ConfigService from './services/config.service';
import Sidebar from './common/SideBarNav/SideBarNav';
import Header from './common/Header/Header';
import useStyles from './App.styles';
import logo from './utils/images/logo.svg';
import UserStoreInstance from './stores/User.store';
import configApp from './appConf';
import 'react-toastify/dist/ReactToastify.css';
import UserManagement from './pages/UserManagement/index';
import PermissionCheck from './common/PermissionCheck/PermissionCheck';
import QuestionnaireSchemaPage from './pages/QuestionnaireSchemaPage/index';

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

  const getRoutes = () => [
    {
      path: configApp.sitesPostfixes.fileUpload,
      component: <UploadPage />,
    },
    {
      path: configApp.sitesPostfixes.interview,
      component: <h1>interview</h1>,
    },
    {
      path: configApp.sitesPostfixes.luz,
      component: <Luz />,
    },
    {
      path: configApp.sitesPostfixes.track,
      component: <Track />,
    },
    {
      path: configApp.sitesPostfixes.malshabSchedule,
      component: <h1>malshabSchedule</h1>,
    },
    {
      path: configApp.sitesPostfixes.malshabSearch,
      component: <h1>malshabSearch</h1>,
    },
    {
      path: configApp.sitesPostfixes.reports,
      component: <Report />,
    },
    {
      path: configApp.sitesPostfixes.posh,
      component: <h1>posh</h1>,
    },
    {
      path: configApp.sitesPostfixes.preparationKit,
      component: <h1>preparationKit</h1>,
    },
    {
      path: configApp.sitesPostfixes.nodeGroupCreation,
      component: <NodeGroupPage />,
    },
    {
      path: configApp.sitesPostfixes.userManagement,
      component: <UserManagement />,
    },
    {
      path: configApp.sitesPostfixes.unitCreation,
      component: <h1>unitCreation</h1>,
    },
    {
      path: configApp.sitesPostfixes.questionnaires,
      component: <QuestionnaireSchemaPage />,
    },
  ];

  const renderApp = () => (isAuthenticated ? (
    <Router classes={classes.root}>
      <Header />
      <div className={classes.bodyContainer}>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          {getRoutes().map(({ path, component }) => (
            <Route key={path} path={path}>
              {component}
              <PermissionCheck path={path} />
            </Route>
          ))}
        </Switch>
      </div>
      <ToastContainer />
    </Router>
  ) : (
    renderUnauthorized()
  ));

  return isLoading ? renderLoading() : renderApp();
};

export default App;
