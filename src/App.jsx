import React, { useState, useCallback, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MalshabSearch from './pages/MalshabSearch/index';
import NodeGroupPage from './pages/NodeGroupPage/index';
import Luz from './pages/Luz/index';
import Track from './pages/Track/index';
import AuthService from './services/auth.service';
import UploadPage from './pages/FileUpload/index';
import Report from './pages/Reports/index';
import NodeGroupSelection from './pages/NodeGroupSelection/index';
import ConfigService from './services/config.service';
import Sidebar from './common/SideBarNav/SideBarNav';
import Header from './common/Header/Header';
import useStyles from './App.styles';
import logo from './utils/images/logo.svg';
import UserStoreInstance from './stores/User.store';
import InterviewDashboard from './pages/InterviewDashboard';
import configApp from './appConf';
import 'react-toastify/dist/ReactToastify.css';
import UserManagement from './pages/UserManagement/index';
import PermissionCheck from './common/PermissionCheck/PermissionCheck';
import MalshabSchedulePage from './pages/MalshabSchedule';
import PreparationKit from './pages/PreparationKit/index';
import QuestionnaireSchemaPage from './pages/QuestionnaireSchemaPage/index';

const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sidebarRef = useRef(null);

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
      component: <InterviewDashboard eventId='60dc87e2d5b56536cc2313f4' />,
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
      component: <MalshabSchedulePage />,
    },
    {
      path: configApp.sitesPostfixes.nodeGroupSelection,
      component: <NodeGroupSelection />,
    },
    {
      path: configApp.sitesPostfixes.malshabSearch,
      component: <MalshabSearch />,
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
      component: <PreparationKit sidebarRef={sidebarRef} />,
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
      path: configApp.sitesPostfixes.questionnaires,
      component: <QuestionnaireSchemaPage />,
    },
  ];

  const renderApp = () => (isAuthenticated ? (
    <Router classes={classes.root}>
      <Header />
      <div className={classes.bodyContainer}>
        <Sidebar ref={sidebarRef} />
        <PermissionCheck />
        <Switch>
          {getRoutes().map(({ path, component }) => (
            <Route key={path} path={path}>
              {component}
            </Route>
          ))}
        </Switch>
      </div>
      <ToastContainer
        toastClassName={classes.toastRoot}
        progressClassName={classes.toastProgress}
        position='bottom-left'
      />
    </Router>
  ) : (
    renderUnauthorized()
  ));

  return isLoading ? renderLoading() : renderApp();
};

export default App;
