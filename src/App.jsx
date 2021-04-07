import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/index';
import Header from './common/interviewer-header/Header';
import AuthService from './services/auth.service';
import ConfigService from './services/config.service';
import InterviewerHeader from './common/InterviewerHeader/InterviewerHeader';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  // TODO: Modify current user in store
  if (currentUser);

  const initAuthUser = useCallback(() => {
    AuthService.getAuthUser()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
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
          <Header />
          <Switch>
            <Route path='/' exact>
              <Home />
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
