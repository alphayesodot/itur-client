import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Home from './pages/home/index';
import useStyles from './App.styles';

const App = () => {
  const classes = useStyles();

  return (
    <Router classes={classes.root}>
      {/* TODO: Add a proper navigation bar */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
