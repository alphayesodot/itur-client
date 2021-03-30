import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/index';
import Header from './common/interviewer-header/Header';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();

  return (
    <Router classes={classes.root}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/interview-dashboard">
          <h1>interview-dashboard</h1>
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
