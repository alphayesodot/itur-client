import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/index';
import Track from './pages/Track/index';
import InterviewerHeader from './common/InterviewerHeader/InterviewerHeader';
import AuthService from './services/auth.service';
import ConfigService from './services/config.service';
import useStyles from './App.styles';
import UserStoreInstance from './stores/User.store';
import 'react-toastify/dist/ReactToastify.css';

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
        }, 2000);
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
      loading
    </div>
  );

  const renderApp = () => (
    isAuthenticated
      ? (
        <Router classes={classes.root}>
          <InterviewerHeader />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/track'>
              <Track />
            </Route>
            <Route path='/interview-dashboard'>
              <h1>interview-dashboard</h1>
            </Route>
          </Switch>
          <ToastContainer />
        </Router>
      )
      : renderUnauthorized()
  );

  return isLoading
    ? renderLoading()
    : renderApp();
};

export default App;
