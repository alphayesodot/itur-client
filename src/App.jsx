import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/index';
import Track from './pages/Track/index';
import InterviewerHeader from './common/InterviewerHeader/InterviewerHeader';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();

  return (
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
  );
};

export default App;
