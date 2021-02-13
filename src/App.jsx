import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/index';
import Sidebar from './common/sidebar/sidebar';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </Router>
  );
};

export default App;
