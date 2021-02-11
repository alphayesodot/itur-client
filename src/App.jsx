import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './pages/home/index';
import Sidebar from './common/sidebar/sidebar';
import useStyles from './App.styles';

const App = () => {
  const classes = useStyles();

  return (
    <Router classes={classes.root}>
      <Sidebar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
