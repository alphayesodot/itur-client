import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/index';
import useStyles from './App.styles';
import InterviewDashboard from './pages/InterviewDashboard/InterviewDashboard';

const App = () => {
  const classes = useStyles();

  return (
    <Router classes={classes.root}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/interview-dashboard'>
          <InterviewDashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
